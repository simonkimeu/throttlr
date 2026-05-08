const express = require("express");
const rateLimiter = require("./rateLimiter");

const app = express();
const PORT = 3000;

app.use(rateLimiter(5, 60000));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Throttlr", status: "ok" });
  });

  app.get("/data", (req, res) => {
    res.json({ data: "Some protected data", timestamp: new Date().toISOString() });
    });

    app.listen(PORT, () => {
      console.log(`Throttlr running on http://localhost:${PORT}`);
      });