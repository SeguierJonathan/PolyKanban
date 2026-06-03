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
                    }
                ]
            }

        ]
    });

    res.status(200).json(board);

}