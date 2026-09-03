package lists

import (
	"backend-go/internal/cards"

	"gorm.io/gorm"
)

type List struct {
	gorm.Model
	Position uint16
	Title    string
	Cards    []cards.Card
}

func (List) TableName() string {
	return "list"
}
