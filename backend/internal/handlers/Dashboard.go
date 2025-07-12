package handlers

import (
	"encoding/json"
	"net/http"
)

type MessageResponse struct {
	Users   string `json:"users"`
	Orders  string `json:"orders"`
	Revenue string `json:"revenue"`
}

func DashboardHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	message := MessageResponse{
		Users:   "120",
		Orders:  "75",
		Revenue: "1050000",
	}
	json.NewEncoder(w).Encode(message)

	/*r.GET("/api/summary", func() {
		c.JSON(200, gin.H{
			"users":   120,
			"orders":  75,
			"revenue": 1050000,
		})
	})*/
}
