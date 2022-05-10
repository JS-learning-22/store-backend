import express from "express";
import SaleController from "../controllers/Sale.controller.js";

const saleRoutes = express.Router();

saleRoutes
  .route("/sale")
  .post(SaleController.createSale)
  .get(SaleController.getSales);

saleRoutes
  .route("/sale/:saleId")
  .delete(SaleController.deleteSale)
  .patch(SaleController.updateSale);

export default saleRoutes;
