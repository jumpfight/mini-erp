package main

import (
	"encoding/json"
	"fmt"
	"log"
	"mini-erp/backend/internal/auth"
	"mini-erp/backend/internal/handlers"
	"mini-erp/backend/internal/middleware"
	"net/http"
	"os"
	"time"

	MQTT "github.com/eclipse/paho.mqtt.golang"
	"github.com/joho/godotenv"
)

type Payload struct {
	Message string `json:"message"`
	Time    string `json:"time"`
}

func main() {
	//env
	_ = godotenv.Load()
	env := os.Getenv("APP_ENV")
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Printf("Running in %s mode on port %s\n", env, port)

	//mqtt
	//mqtt.Connect()

	go runHTTPServer(port)
	go setupMQTT()

	select {}
}

func runHTTPServer(port string) {
	//routes
	mux := http.NewServeMux()
	mux.HandleFunc("/api/login", handlers.LoginHandler)
	mux.HandleFunc("/api/hello", auth.AuthMiddleware(handlers.HelloHandler))
	mux.HandleFunc("/api/summary", handlers.DashboardHandler)

	// Bungkus dengan middleware
	handler := middleware.CorsMiddleware(mux)

	//start server masuk goroutine karena blocking
	fmt.Printf("Server running on :%s\n", port)
	if err := http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), handler); err != nil {
		log.Fatal("HTTP Server error:", err)
	}
}

func setupMQTT() {
	//setup mqtt
	ip := "mqtt"
	broker := fmt.Sprintf("tcp://%s:1883", ip)
	opts := MQTT.NewClientOptions().AddBroker(broker).SetClientID("go-client")

	opts.OnConnect = func(c MQTT.Client) {
		fmt.Println("MQTT connected from Go")
		subscribe(c)
	}
	opts.OnConnectionLost = func(c MQTT.Client, err error) {
		fmt.Println("MQTT lost:", err)
	}

	client := MQTT.NewClient(opts)
	if token := client.Connect(); token.Wait() && token.Error() != nil {
		panic(token.Error())
	}

	//publish ke topic
	go func() {
		for {
			data := Payload{
				Message: "hi hi hi",
				Time:    time.Now().Format(time.RFC3339),
			}

			jsonData, err := json.Marshal(data)
			if err != nil {
				fmt.Println("JSON marshal error:", err)
				continue
			}

			client.Publish("mytopic/data", 0, false, jsonData)
			time.Sleep(3 * time.Second)
		}
	}()

}

func subscribe(c MQTT.Client) {
	//Subscribe
	c.Subscribe("frontend/cmd", 0, func(client MQTT.Client, msg MQTT.Message) {
		fmt.Printf("Message from frontend: %s\n", msg.Payload())
	})
}
