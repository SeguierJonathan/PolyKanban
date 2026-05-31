CREATE TABLE IF NOT EXISTS "card_tag" (
	"id_card" INTEGER NOT NULL,
	"id_tag" INTEGER NOT NULL,
	PRIMARY KEY("id_card", "id_tag")
);