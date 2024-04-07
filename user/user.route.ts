import {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  updateAuthor,
  updatePublisher
} from "./user.controller";
import { Router } from "express";

export const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.put("/authors/:id", updateAuthor);
router.put("/publishers/:id", updatePublisher);
router.delete("/:id", deleteUser);
