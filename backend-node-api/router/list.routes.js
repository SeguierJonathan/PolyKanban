import { Router } from "express";
import { createList, deleteList, getAllLists, getListById, updateList } from "../controller/list.controller.js";

const router = Router();

router.get('/', getAllLists);
router.get('/:id', getListById);
router.post('/', createList);
router.patch('/:id', updateList);
router.delete('/:id', deleteList);

export default router;
