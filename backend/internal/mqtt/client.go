package mqtt

import (
	"fmt"
	"os"

	mqtt "github.com/eclipse/paho.mqtt.golang"
)

var client mqtt.Client

func Connect() {
	opts := mqtt.NewClientOptions()
	opts.AddBroker("tcp://broker.hivemq.com:1883") // sesuaikan dengan alamat broker kamu
	opts.SetClientID("mini-erp-backend")

	opts.OnConnect = func(c mqtt.Client) {
		fmt.Println("✅ MQTT connected")
		subscribe(c)
	}

	opts.OnConnectionLost = func(c mqtt.Client, err error) {
		fmt.Printf("❌ MQTT lost connection: %v\n", err)
	}

	client = mqtt.NewClient(opts)
	if token := client.Connect(); token.Wait() && token.Error() != nil {
		fmt.Printf("❌ MQTT connection error: %v\n", token.Error())
		os.Exit(1)
	}
}

func subscribe(c mqtt.Client) {
	topic := "monitoring/murdani"
	if token := c.Subscribe(topic, 0, handleMessage); token.Wait() && token.Error() != nil {
		fmt.Printf("❌ MQTT subscribe error: %v\n", token.Error())
	} else {
		fmt.Printf("📩 Subscribed to %s\n", topic)
	}
}

func handleMessage(c mqtt.Client, msg mqtt.Message) {
	fmt.Printf("📥 Diterima dari topic %s: %s\n", msg.Topic(), string(msg.Payload()))
	// Kamu bisa proses dan simpan ke DB, broadcast ke frontend, dll.
}

func Publish(topic, payload string) {
	token := client.Publish(topic, 0, false, payload)
	token.Wait()
	fmt.Printf("📤 Published ke %s: %s\n", topic, payload)
}
