const router = require("express").Router;
const {
  createProducts,
  updateProducts,
  getProducts,
  deleteProducts,
} = require("../controller/product.controller");

const productRouter = router();

productRouter.get("/", getProducts);
productRouter.post("/", createProducts);
productRouter.patch("/", updateProducts);
productRouter.delete("/", deleteProducts);

module.exports = productRouter;