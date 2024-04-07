import {
  createCategory,
  getCategory,
  getOneCategory,
  updateCategory,
  deleteCategory,
} from "./category.controller";
import { Router } from "express";

export const router = Router();

router.post("/", createCategory);
router.get("/", getCategory);
router.get("/:id", getOneCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
