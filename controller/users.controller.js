const getUsers = (req, res) => {
  res.status(200).send("Welcome to my server");
};

const createUser =(req, res) => {
  res.status(200).send("Your data has been saved");
};

const updateUser = (req, res) => {
  res.status(200).send("Your data has been updated");
};

const deleteUser = (req, res) => {
  res.status(200).send("Your data has been deleted");
};

module.exports = {getUsers, createUser, updateUser, deleteUser};