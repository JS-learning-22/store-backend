import express from "express";
import saleRoutes from "./sale.routes.js";

const allRoutes = express.Router();

allRoutes.use(saleRoutes);

export default allRoutes;
