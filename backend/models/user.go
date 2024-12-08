package models

type User struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    Username  string `json:"username" gorm:"unique;not null"`
    Password  string `json:"-" gorm:"not null"` // Encrypted password
    Email     string `json:"email" gorm:"unique;not null"`
    Role      string `json:"role" gorm:"default:'user'"`
    CreatedAt string `json:"created_at"`
    UpdatedAt string `json:"updated_at"`
}