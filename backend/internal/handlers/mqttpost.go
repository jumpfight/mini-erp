package handlers

import (
	"encoding/json"
	"mini-erp/backend/internal/mqtt"
	"net/http"
)

func MqttPostHandler(w http.ResponseWriter, r *http.Request) {
	var input struct {
		Topic   string `json:"topic"`
		Payload string `json:"payload"`
	}

	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "Input tidak valid", http.StatusBadRequest)
		return
	}

	mqtt.Publish(input.Topic, input.Payload)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "published"})
}
