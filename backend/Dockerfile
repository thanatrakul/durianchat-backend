# Use the official Golang image as a builder
FROM golang:1.20 AS builder

# Set the working directory
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the source code
COPY . .

# Build the application
RUN go build -o backend cmd/main.go

# Use a minimal image for running the app
FROM alpine:3.17

# Set working directory
WORKDIR /root/

# Copy binary from builder
COPY --from=builder /app/backend .

# Expose port
EXPOSE 8080

# Run the binary
CMD ["./backend"]