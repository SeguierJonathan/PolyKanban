import sequelize from "../config/sequelise.config.js";
import List from "./list.model.js";
import Card from "./card.model.js";
import Tag from "./tag.model.js";

Card.belongsTo(List, {
    foreignKey: 'listId',
    as: "list",
    onDelete: "CASCADE"
})

List.hasMany(Card, {
    foreignKey: 'listId',
    as: 'cards',
    onDelete: "CASCADE"
})

Card.belongsToMany(Tag, { through: 'card_tag', as: "tags", onDelete: "CASCADE" });
Tag.belongsToMany(Card, { through: 'card_tag', as: "tags", onDelete: "CASCADE" });



export { sequelize, List, Card, Tag };
