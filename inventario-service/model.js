const router = require("express").Router();

const RESOURCE_PATH = "model";
const Models = {};
let lastId = 1;

const getAllModels = (request, response) => {
  response.set("X-Total-Count", Object.values(Models).length);
  response.send(Object.values(Models));
};

const getModel = (request, response) => {
  if (Models[request.params.id]) {
    response.set("X-Total-Count", 1);
    response.send(Models[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const createModel = (request, response) => {
  const id = lastId++;
  const new_Model = { ...request.body, id };
  Models[id] = new_Model;
  response.set("X-Total-Count", 1);
  response.send(new_Model);
};

const modifyModel = (request, response) => {
  if (Models[request.params.id]) {
    Models[request.params.id] = {
      ...Models[request.params.id],
      ...request.body,
    };
    response.set("X-Total-Count", 1);
    response.send(Models[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const deletModel = (request, response) => {
  if (Models[request.params.id]) {
    delete Models[request.params.id];
    response.set("X-Total-Count", 1);
    response.status(200).end();
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

router.get("/", getAllModels);
router.get("/:id", getModel);
router.post("/", createModel);
router.put("/:id", modifyModel);
router.delete("/:id", deletModel);

module.exports = {
  router,
  RESOURCE_PATH,
};
