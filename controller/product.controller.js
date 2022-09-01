const getProducts =(req, res) => {
  res.status(200).send("Get all Products");
};

const createProducts = (req, res) =>{
  res.status(200).send("Product has been created");
};

const updateProducts = (req, res)=>{
  res.status(200).send("Product has been updated");
};

const deleteProducts = (req, res) => {
  res.status(200).send("Product had been deleted");
};

module.exports = {createProducts, getProducts, deleteProducts, updateProducts};