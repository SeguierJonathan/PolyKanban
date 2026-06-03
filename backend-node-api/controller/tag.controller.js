import { Tag } from "../models/index.js";

export async function getAllTags(req, res) {
    const tags = await Tag.findAll();
    res.status(200).json(tags);
}

export function getTagById(req, res) { }

export function createTag(req, res) { }

export function updateTag(req, res) { }

export function deleteTag(req, res) { }