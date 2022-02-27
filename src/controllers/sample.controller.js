const sampleFunction = (req, res) => {
  res.status(200).send('Hello World!');
};

const createUser = (req, res) => {

};

const sampleController = {
  sampleFunction,
  createUser,
};

export default sampleController;
