
const testOneCtrl = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: { asd: "asd test 1" },
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  testOneCtrl,
};
