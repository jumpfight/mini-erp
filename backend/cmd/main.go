package main

import (
	"encoding/json"
	"fmt"
	"mini-erp/backend/internal/auth"
	"mini-erp/backend/internal/handlers"
	"mini-erp/backend/internal/middleware"
	"net/http"
)

type Message struct {
	Text string `json:"text"`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	message := Message{Text: "Halo dari Backend Go (pakai JWT)!"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(message)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/login", handlers.LoginHandler)
	mux.HandleFunc("/api/hello", auth.AuthMiddleware(helloHandler))

	// Bungkus dengan middleware
	handler := middleware.CorsMiddleware(mux)

	fmt.Println("Server running on :8080")
	http.ListenAndServe(":8080", handler)
}
