package routes

import (
    "github.com/gin-gonic/gin"
)

func InitRoutes(r *gin.Engine) {
    AuthRoutes(r)
    ChatRoutes(r)
    NotificationRoutes(r)
    AnalyticsRoutes(r)
    WorkflowRoutes(r)
    FraudRoutes(r)
}