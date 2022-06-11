require("dotenv").config();

const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routers");
const loader = require("./loaders");
const helmet = require("helmet");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());

loader(app);
router(app);

app.use("/", (req, res, next) => {
  res.send("Hello from ssl server");
});

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert", "cert.pem")),
  },
  app
);

sslServer.listen(port, () => {
  console.log("Hello ssl server");
});

// app.listen(port, () => {
//   console.log("listening on port " + port);
// });
