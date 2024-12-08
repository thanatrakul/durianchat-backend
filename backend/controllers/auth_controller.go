package controllers

import (
    "durianchat-backend/models"
    "durianchat-backend/utils"
    "net/http"

    "github.com/gin-gonic/gin"
)

func Login(c *gin.Context) {
    var credentials models.User
    if err := c.ShouldBindJSON(&credentials); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
        return
    }

    user, err := models.GetUserByUsername(credentials.Username)
    if err != nil || !utils.CheckPasswordHash(credentials.Password, user.Password) {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid username or password"})
        return
    }

    token, err := utils.GenerateJWT(user.Username)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"token": token})
}