package models

type AnalyticsReport struct {
    ID             uint    `json:"id" gorm:"primaryKey"`
    Metric         string  `json:"metric" gorm:"not null"`
    Value          float64 `json:"value"`
    GeneratedAt    string  `json:"generated_at"`
}