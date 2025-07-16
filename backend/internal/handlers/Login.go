package handlers

import (
	"encoding/json"
	"mini-erp/backend/internal/auth"

	"net/http"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
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

	token, err := auth.GenerateJWT(input.Username)
	if err != nil {
		http.Error(w, "Gagal buat token", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"token": token})
}
