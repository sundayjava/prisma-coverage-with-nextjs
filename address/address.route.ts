import {
  createAddress,
  getAddresss,
  getOneAddress,
  updateAddress,
  deleteAddress,
} from "./address.controller";
import { Router } from "express";

export const router = Router();

router.post("/", createAddress);
router.get("/", getAddresss);
router.get("/:id", getOneAddress);
router.put("/:id", updateAddress);
router.delete("/:id", deleteAddress);
