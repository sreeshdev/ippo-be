import TestData from "../database/tester";

const createTests = async (req, res) => {
  const { value, requiredLength, type } = req.body;
  const data = new TestData({
    value,
    requiredLength,
    type,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTestedList = async (req, res) => {
  try {
    const data = await TestData.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
  createTests,
  getTestedList,
};
