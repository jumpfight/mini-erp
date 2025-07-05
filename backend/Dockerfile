FROM golang:1.21-alpine

# Buat folder kerja
WORKDIR /app

# Copy file project ke container
COPY . .

# Download dependensi
RUN go mod download

# Build binary
RUN go build -o main .

# Jalankan binary
CMD ["./main"]

# Port backend (ubah sesuai yg kamu pakai di main.go)
EXPOSE 8080
