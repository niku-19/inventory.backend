import express from "express";
import {
  addSale,
  getAllSales,
  removeSale,
} from "../controllers/item.controllers.js";

const SaleRouter = express.Router();

SaleRouter.post("/sales/add-sale", addSale);
SaleRouter.get("/sales/sales", getAllSales);
SaleRouter.delete("/sales/:saleId", removeSale);

export default SaleRouter;
