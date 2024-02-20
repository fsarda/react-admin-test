const router = require("express").Router();

const RESOURCE_PATH = "brand";
const brands = { 1: { id: 1, name: "iPhone" }, 2: { id: 2, name: "Xiaomi" } };
let lastId = 1;

const getAllBrands = (request, response) => {
  response.set("X-Total-Count", Object.values(brands).length);
  response.send(Object.values(brands));
};

const getBrand = (request, response) => {
  if (brands[request.params.id]) {
    response.set("X-Total-Count", 1);
    response.send(brands[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const createBrand = (request, response) => {
  const id = lastId++;
  const new_brand = { ...request.body, id };
  brands[id] = new_brand;
  response.set("X-Total-Count", 1);
  response.send(new_brand);
};

const modifyBrand = (request, response) => {
  if (brands[request.params.id]) {
    brands[request.params.id] = {
      ...brands[request.params.id],
      ...request.body,
    };
    response.set("X-Total-Count", 1);
    response.send(brands[request.params.id]);
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

const deletBrand = (request, response) => {
  if (brands[request.params.id]) {
    delete brands[request.params.id];
    response.set("X-Total-Count", 1);
    response.status(200).end();
  } else {
    response.set("X-Total-Count", 0);
    response.status(404).end();
  }
};

router.get("/", getAllBrands);
router.get("/:id", getBrand);
router.post("/", createBrand);
router.put("/:id", modifyBrand);
router.delete("/:id", deletBrand);

module.exports = {
  router,
  RESOURCE_PATH,
};
