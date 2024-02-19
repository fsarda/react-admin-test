const router = require("express").Router();

const RESOURCE_PATH = "operation_type";
const operation_types = {
  1: { id: 1, name: "Compra" },
  2: { id: 2, name: "Venta" },
  3: { id: 3, name: "Retorno a proveedor" },
  3: { id: 3, name: "Retorno de cliente" },
};
let lastId = 1;

const getAllOperationTypes = (request, response) => {
  response.set("X-Total-Count", Object.values(operation_types).length);
  response.send(operation_types);
};

const getOperationType = (request, response) => {
  if (operation_types[request.params.id]) {
    response.set("X-Total-Count", 1);
    response.send(operation_types[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const createOperationType = (request, response) => {
  const id = lastId++;
  const new_Operation = { ...request.body, id };
  operation_types[id] = new_Operation;
  response.set("X-Total-Count", 1);
  response.send(new_Operation);
};

const modifyOperationType = (request, response) => {
  if (operation_types[request.params.id]) {
    operation_types[request.params.id] = {
      ...operation_types[request.params.id],
      ...request.body,
    };
    response.set("X-Total-Count", 1);
    response.send(operation_types[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const deleteOperationType = (request, response) => {
  if (operation_types[request.params.id]) {
    delete operation_types[request.params.id];
    response.set("X-Total-Count", 1);
    response.status(200).end();
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

router.get("/", getAllOperationTypes);
router.get("/:id", getOperationType);
router.post("/", createOperationType);
router.put("/:id", modifyOperationType);
router.delete("/:id", deleteOperationType);

module.exports = {
  router,
  RESOURCE_PATH,
};
