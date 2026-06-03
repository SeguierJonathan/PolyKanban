import { List } from "../models/index.js";

export async function getAllLists(req, res) {
    const lists = await List.findAll();
    res.status(200).json(lists);
}

export function getListById(req, res) { }

export function createList(req, res) { }

export function updateList(req, res) { }

export function deleteList(req, res) { }