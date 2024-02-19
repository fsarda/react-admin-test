const express = require("express");
var cors = require("cors");
const clients = require("./client");
const devices = require("./device");
const providers = require("./provider");
const brands = require("./brand");
const models = require("./model");
const device_type = require("./device_type");
const operation_type = require("./operation_type");
const operation_device = require("./operation_device");

var corsOptions = {
  origin: "*",
  allowedHeaders: [
    "Access-Control-Expose-Headers",
    "X-Total-Count",
    "Content-Length",
    "Content-Type",
  ],
  exposedHeaders: ["X-Total-Count"],
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.use(`/${clients.RESOURCE_PATH}`, clients.router);
app.use(`/${devices.RESOURCE_PATH}`, devices.router);
app.use(`/${providers.RESOURCE_PATH}`, providers.router);
app.use(`/${brands.RESOURCE_PATH}`, brands.router);
app.use(`/${models.RESOURCE_PATH}`, models.router);
app.use(`/${device_type.RESOURCE_PATH}`, device_type.router);
app.use(`/${operation_type.RESOURCE_PATH}`, operation_type.router);
app.use(`/${operation_device.RESOURCE_PATH}`, operation_device.router);
