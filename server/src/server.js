const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(morgan("common"));
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const port = 1337;

app.listen(port, () => {
  console.log(`Listening on at http://localhost:${port}`);
});
