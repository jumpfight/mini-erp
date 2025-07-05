package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtKey = []byte("rahasia123") // ganti di production ya!

type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func generateJWT(username string) (string, error) {
	claims := &Claims{
		Username: username,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(5 * time.Minute)),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtKey)
}

func authMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// CORS Headers
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Headers", "Authorization, Content-Type")

		tokenStr := r.Header.Get("Authorization")
		if tokenStr == "" {
			http.Error(w, "Missing token", http.StatusUnauthorized)
			return
		}

		// Remove "Bearer " prefix
		if len(tokenStr) > 7 && tokenStr[:7] == "Bearer " {
			tokenStr = tokenStr[7:]
		}

		claims := &Claims{}
		tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(t *jwt.Token) (interface{}, error) {
			return jwtKey, nil
		})

		if err != nil || !tkn.Valid {
			http.Error(w, "Invalid token", http.StatusUnauthorized)
			return
		}

		// Lanjutkan jika token valid
		next(w, r)
	}
}

type Message struct {
	Text string `json:"text"`
}

func enableCORS(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*") // atau spesifik: "http://localhost:3000"
    w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
}

func corsMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        enableCORS(w, r)
        if r.Method == http.MethodOptions {
            w.WriteHeader(http.StatusOK)
            return
        }
        next.ServeHTTP(w, r)
    })
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	message := Message{Text: "Halo dari Backend Go (pakai JWT)!"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(message)
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	// Contoh user hardcoded
	username := "admin"
	password := "123"

	// Ambil dari form atau JSON (disederhanakan di sini)
	if r.Method != http.MethodPost {
		http.Error(w, "Gunakan POST", http.StatusMethodNotAllowed)
		return
	}

	// Simulasi verifikasi user
	var input struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	json.NewDecoder(r.Body).Decode(&input)

	if input.Username != username || input.Password != password {
		http.Error(w, "Login gagal", http.StatusUnauthorized)
		return
	}

	token, err := generateJWT(input.Username)
	if err != nil {
		http.Error(w, "Gagal buat token", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}

func main() {
	mux := http.NewServeMux()
    mux.HandleFunc("/api/login", loginHandler)
    mux.HandleFunc("/api/hello", authMiddleware(helloHandler))

    // Bungkus dengan middleware
    handler := corsMiddleware(mux)

    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", handler)
}
