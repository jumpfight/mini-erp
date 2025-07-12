package main

import (
	"fmt"
	"mini-erp/backend/internal/auth"
	"mini-erp/backend/internal/handlers"
	"mini-erp/backend/internal/middleware"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/login", handlers.LoginHandler)
	mux.HandleFunc("/api/hello", auth.AuthMiddleware(handlers.HelloHandler))

	// Bungkus dengan middleware
	handler := middleware.CorsMiddleware(mux)

	//mqtt.Connect()

	fmt.Println("Server running on :8080")
	http.ListenAndServe(":8080", handler)
}
