package models

type FraudAlert struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    UserID    uint   `json:"user_id"`
    Type      string `json:"type" gorm:"not null"` // Example: Suspicious Login
    Details   string `json:"details" gorm:"type:text"`
    CreatedAt string `json:"created_at"`
}