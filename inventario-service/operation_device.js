const router = require("express").Router();

const RESOURCE_PATH = "operation_device";
const operations_device = {};
let lastId = 1;

const getAllOperations = (request, response) => {
  response.set("X-Total-Count", Object.values(operations_device).length);
  response.send(Object.values(operations_device));
};

const getAllOperationsByDevice = (request, response) => {
  const device_id = request.params.device_id;
  const operations_device_filtered = Object.values(operations_device).filter(
    (operation) => operation.device_id === device_id
  );
  response.set(
    "X-Total-Count",
    Object.values(operations_device_filtered).length
  );
  response.send(operations_device_filtered);
};

const getOperation = (request, response) => {
  if (operations_device[request.params.id]) {
    response.set("X-Total-Count", 1);
    response.send(operations_device[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const createOperation = (request, response) => {
  const id = lastId++;
  const new_Operation = { ...request.body, id };
  operations_device[id] = new_Operation;
  response.set("X-Total-Count", 1);
  response.send(new_Operation);
};

const modifyOperation = (request, response) => {
  if (operations_device[request.params.id]) {
    operations_device[request.params.id] = {
      ...operations_device[request.params.id],
      ...request.body,
    };
    response.set("X-Total-Count", 1);
    response.send(operations_device[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const deleteOperation = (request, response) => {
  if (operations_device[request.params.id]) {
    delete operations_device[request.params.id];
    response.set("X-Total-Count", 1);
    response.status(200).end();
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

router.get("/", getAllOperations);
router.get("/:device_id", getAllOperationsByDevice);
router.get("/:id", getOperation);
router.post("/", createOperation);
router.put("/:id", modifyOperation);
router.delete("/:id", deleteOperation);

module.exports = {
  router,
  RESOURCE_PATH,
};
