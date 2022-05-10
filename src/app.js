import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import models, { connectDb } from "./config/db.js";

dotenv.config();

const app = express();

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors());

app.get("/", async (_, res) => {
  res.status(200).json({
    message: "Backend up",
  });
});

connectDb().then(async () => {
  if (process.env.SYNCDATABASE) {
    await Promise.all([models.Sale.deleteMany({})]);
  }
  app.listen(process.env.PORT, async () => {
    console.log(`Example app listening on port ${process.env.PORT}!`);
  });
});

export default app;
