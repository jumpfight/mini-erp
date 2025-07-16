package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func HelloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	switch r.Method {
	case http.MethodGet:
		// Tetap seperti sebelumnya
		message := Message{Text: "Halo dari Backend Go (pakai JWT), update pakai Air"}
		json.NewEncoder(w).Encode(message)

	case http.MethodPost:
		// Baca input JSON dari body
		var input struct {
			Nama string `json:"nama"`
		}

		if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
			http.Error(w, "Input tidak valid", http.StatusBadRequest)
			return
		}

		// Buat balasan dengan nama dari input
		message := Message{
			Text: fmt.Sprintf("Halo %s, ini dari POST dengan JWT!", input.Nama),
		}
		json.NewEncoder(w).Encode(message)

	default:
		http.Error(w, "Metode tidak diizinkan", http.StatusMethodNotAllowed)
	}
}
