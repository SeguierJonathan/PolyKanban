package cards

import (
	"gorm.io/gorm"
)

type Card struct {
	gorm.Model
	Position    uint16
	Title       string
	Description string
	ListID      uint
}

func (Card) TableName() string {
	return "card"
}
