package models

type ChatRoom struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    Name      string `json:"name"`
    CreatedAt string `json:"created_at"`
    UpdatedAt string `json:"updated_at"`
}

type Message struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    RoomID    uint   `json:"room_id" gorm:"not null"`
    UserID    uint   `json:"user_id" gorm:"not null"`
    Content   string `json:"content" gorm:"type:text;not null"`
    CreatedAt string `json:"created_at"`
}