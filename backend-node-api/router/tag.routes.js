import { Router } from "express";
import { createTag, deleteTag, getAllTags, getTagById, updateTag } from "../controller/Tag.controller.js";

const router = Router();

router.get('/', getAllTags);
router.get('/:id', getTagById);
router.post('/', createTag);
router.patch('/:id', updateTag);
router.delete('/:id', deleteTag);

export default router;