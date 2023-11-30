const express = require("express");
const routes = require("./routes.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
require("./database");

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
