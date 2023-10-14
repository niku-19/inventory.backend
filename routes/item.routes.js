import express from "express";
import {
  AddItem,
  getItems,
  removeItem,
  updateItem,
} from "../controllers/item.controllers.js";

const ItemRouter = express.Router();

ItemRouter.post("/items/add-item", AddItem);
ItemRouter.get("/items/items", getItems);
ItemRouter.delete("/items/:itemId", removeItem);
ItemRouter.post("/items/:itemId/update", updateItem);

export default ItemRouter;
