const express = require("express");
const app = express();
const PORT = 3000;


const headersRoute = require("./Routes/Headers");


app.use("/", headersRoute); // Ye sahi use hai


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
