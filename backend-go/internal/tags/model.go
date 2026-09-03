package tags

import (
	"gorm.io/gorm"
)

type Tag struct {
	gorm.Model
	Text  string
	Color string
}

func (Tag) TableName() string {
	return "tag"
}
