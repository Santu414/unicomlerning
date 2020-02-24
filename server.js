const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "This is get request"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`The app is running on port no${PORT}`);
});
