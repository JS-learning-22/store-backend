const express = require("express");
const cors = require("cors");

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`The application is running ${PORT}`);
});
