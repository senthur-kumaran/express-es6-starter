const sampleFunction = (req, res) => {
  res.status(200).send('Hello World!');
};

const sampleController = {
  sampleFunction,
};

export default sampleController;
