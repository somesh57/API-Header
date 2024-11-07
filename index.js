const express = require("express");
const app = express();
const PORT = 3000;

// Routes ko import karna
const headersRoute = require("./Routes/Headers");

// Use the routes
app.use("/", headersRoute); // Ye sahi use hai

// Server ko start karna
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
