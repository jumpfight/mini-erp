package main

import (
	"fmt"
	"log"
	"mini-erp/backend/internal/auth"
	"mini-erp/backend/internal/handlers"
	"mini-erp/backend/internal/middleware"
	"mini-erp/backend/internal/utils"
	"net/http"
	"os"
	"time"

	MQTT "github.com/eclipse/paho.mqtt.golang"
	"github.com/joho/godotenv"
)

func main() {
	//env
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found")
	}
	env := os.Getenv("APP_ENV")
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // fallback default
	}
	fmt.Printf("Running in %s mode on port %s\n", env, port)

	//routes
	mux := http.NewServeMux()
	mux.HandleFunc("/api/login", handlers.LoginHandler)
	mux.HandleFunc("/api/hello", auth.AuthMiddleware(handlers.HelloHandler))
	mux.HandleFunc("/api/summary", handlers.DashboardHandler)

	// Bungkus dengan middleware
	handler := middleware.CorsMiddleware(mux)

	//mqtt
	//mqtt.Connect()

	//start server
	fmt.Printf("Server running on :%s\n", port)
	http.ListenAndServe(fmt.Sprintf("0.0.0.0:%s", port), handler)

	//ip
	ip := utils.GetLocalIP()

	//local mqtt
	opts := MQTT.NewClientOptions().AddBroker(fmt.Sprintf("tcp://%s:1883", ip)).SetClientID("go-client")
	client := MQTT.NewClient(opts)
	if token := client.Connect(); token.Wait() && token.Error() != nil {
		panic(token.Error())
	}

	//publish ke topic
	go func() {
		for {
			text := fmt.Sprintf("Hello from Go at %v", time.Now())
			client.Publish("mytopic/data", 0, false, text)
			time.Sleep(3 * time.Second)
		}
	}()

	//Subscribe
	client.Subscribe("frontend/cmd", 0, func(client MQTT.Client, msg MQTT.Message) {
		fmt.Printf("Message from frontend: %s\n", msg.Payload())
	})
	select {}
}
