package config

import (
    // "database/sql"
    "log"
    "os"

    "github.com/thanatrakul/durianchat-backend/models/analytics"
    "github.com/thanatrakul/durianchat-backend/models/chat"
    "github.com/thanatrakul/durianchat-backend/models/fraud"
    "github.com/thanatrakul/durianchat-backend/models/notification"
    "github.com/thanatrakul/durianchat-backend/models/users"
    "github.com/thanatrakul/durianchat-backend/models/workflow"

    "gorm.io/driver/postgres"
    "gorm.io/gorm"
)

// InitDB initializes the database connection
func InitDB() *gorm.DB {
    dsn := os.Getenv("DATABASE_URL")
    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
    if err != nil {
        log.Fatalf("Failed to connect to database: %v", err)
    }
    log.Println("Connected to the database successfully!")
    return db
}

// MigrateModels migrates all the models
func MigrateModels(db *gorm.DB) {
    err := db.AutoMigrate(
        &models.User{},
        &models.ChatRoom{},
        &models.Message{},
        &models.Notification{},
        &models.CRMIntegration{},
        &models.SystemMetrics{},
        &models.AnalyticsReport{},
        &models.Workflow{},
        &models.FraudAlert{},
    )
    if err != nil {
        log.Fatalf("Failed to migrate models: %v", err)
    }
    log.Println("Database migration completed!")
}
