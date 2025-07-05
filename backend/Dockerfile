FROM golang:1.24.4-alpine

# Install git dan bash (beberapa image alpine tidak ada git)
RUN apk add --no-cache git bash

# Buat folder kerja
WORKDIR /app

# Install air
RUN go install github.com/air-verse/air@v1.62.0

# Pastikan binary ada di PATH
ENV PATH="/go/bin:${PATH}"

# Copy file project ke container
COPY . .

# Download dependensi
RUN go mod download

# Build binary
RUN go build -o main .

# Jalankan binary
# CMD ["./main"]

# Jalankan pakai air
CMD ["air"]

# Port backend (ubah sesuai yg kamu pakai di main.go)
EXPOSE 8080
