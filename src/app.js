import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import allRoutes from "./routes/all.routes.js";

import models, { connectDb } from "./config/db.js";

dotenv.config();

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors());

app.use(allRoutes);

app.get("/", async (_, res) => {
  res.status(200).json({
    message: "Backend up",
  });
});

connectDb().then(async () => {
  if (!process.env.SYNCDATABASE) {
    console.log("The DB will be empty");
    await Promise.all([models.Sale.deleteMany({})]);
  }
  app.listen(process.env.PORT, async () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});

export default app;
