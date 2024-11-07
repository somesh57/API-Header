const express = require("express");
const router = express.Router();


router.get("/get-headers", (req, res) => {
  const headers = req.headers;
  res.json(headers);
});

module.exports = router; // Correct export
