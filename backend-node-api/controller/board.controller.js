import { Model } from "sequelize";
import { Card, List, Tag } from "../models/index.js";

export async function getAll(req, res) {

    const board = await List.findAll({
        include: [
            {
                model: Card,
                as: "cards",
                include: [
                    {
                        model: Tag,
                        as: "tags"
                    }
                ],
            }
        ],
        order: [
            ['position', 'ASC'],
            [{ model: Card, as: 'cards' }, 'position', 'ASC'],
            [{ model: Card, as: 'cards' }, { model: Tag, as: 'tags' }, 'id', 'ASC']
        ]
    });

    res.status(200).json(board);

}