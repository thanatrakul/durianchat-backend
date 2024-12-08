package models

type Workflow struct {
    ID        uint   `json:"id" gorm:"primaryKey"`
    Name      string `json:"name" gorm:"not null"`
    Steps     string `json:"steps" gorm:"type:text"` // JSON array of steps
    CreatedAt string `json:"created_at"`
}