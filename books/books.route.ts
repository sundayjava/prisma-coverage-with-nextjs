import {
  createBooks,
  getBookss,
  getOneBooks,
  updateBooks,
  deleteBooks,
} from "./books.controller";
import { Router } from "express";

export const router = Router();

router.post("/", createBooks);
router.get("/", getBookss);
router.get("/:id", getOneBooks);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBooks);
