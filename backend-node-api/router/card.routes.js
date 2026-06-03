import { Router } from "express";
import { createCard, deleteCard, getAllCards, getCardById, updateCard } from "../controller/Card.controller.js";

const router = Router();

router.get('/', getAllCards);
router.get('/:id', getCardById);
router.post('/', createCard);
router.patch('/:id', updateCard);
router.delete('/:id', deleteCard);

export default router;