const express = require("express");
const router = express.Router();

// Get all headers from request
router.get("/get-headers", (req, res) => {
  const headers = req.headers;
  res.json(headers);
});

module.exports = router; // Correct export
