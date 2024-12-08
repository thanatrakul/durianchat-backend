package main

import (
    "log"

    "github.com/thanatrakul/durianchat-backend/config"
    "github.com/thanatrakul/durianchat-backend/routes"

    "github.com/gin-gonic/gin"
)

func main() {
    // Initialize Database
    db := config.InitDB()
    defer db.Close()

    // Migrate the models
    config.MigrateModels(db)

    // Create Gin Router
    r := gin.Default()

    // Initialize Routes
    routes.InitRoutes(r)

    // Start Server
    log.Println("DurianChat Backend is running on port 8080")
    r.Run(":8080")
}
