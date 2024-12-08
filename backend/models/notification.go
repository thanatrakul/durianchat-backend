package models

type Notification struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    UserID    uint   `json:"user_id" gorm:"not null"`
    Content   string `json:"content" gorm:"type:text;not null"`
    Read      bool   `json:"read" gorm:"default:false"`
    CreatedAt string `json:"created_at"`
}