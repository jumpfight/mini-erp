package handlers

import (
	"encoding/json"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func HelloHandler(w http.ResponseWriter, r *http.Request) {
	message := Message{Text: "Halo dari Backend Go (pakai JWT), update pakai Air"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(message)
}
