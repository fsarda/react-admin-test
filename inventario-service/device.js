const router = require("express").Router();

const RESOURCE_PATH = "device";
const devices = {};
let lastId = 1;

const getAllDevices = (request, response) => {
  response.set("X-Total-Count", Object.values(devices).length);
  response.send(Object.values(devices));
};

const getDevice = (request, response) => {
  if (devices[request.params.id]) {
    response.set("X-Total-Count", 1);
    response.send(devices[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const createDevice = (request, response) => {
  const id = lastId++;
  const new_device = { ...request.body, id };
  devices[id] = new_device;
  response.set("X-Total-Count", 1);
  response.send(new_device);
};

const modifyDevice = (request, response) => {
  if (devices[request.params.id]) {
    devices[request.params.id] = {
      ...devices[request.params.id],
      ...request.body,
    };
    response.set("X-Total-Count", 1);
    response.send(devices[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const deleteDevice = (request, response) => {
  if (clients[request.params.id]) {
    delete clients[request.params.id];
    response.set("X-Total-Count", 1);
    response.status(200).end();
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

router.get("/", getAllDevices);
router.get("/:id", getDevice);
router.post("/", createDevice);
router.put("/:id", modifyDevice);
router.delete("/:id", deleteDevice);

module.exports = {
  router,
  RESOURCE_PATH,
};
