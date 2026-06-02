import { Card } from "../models/index.js";

export async function getAllCards(req, res) {
    const cards = await Card.findAll();
    res.status(200).json(cards);
}

export function getCardById(req, res) { }

export function createCard(req, res) { }

export function updateCard(req, res) { }

export function deleteCard(req, res) { }