// In babyController.js
const Baby = require('../models/babyModel');

exports.searchBaby = async (req, res) => {
  const id = req.query.id;
  try {
    const babyDetails = await Baby.findOne({ birthCertificateID: id });
    if (!babyDetails) {
      return res.status(404).json({ message: 'Baby not found' });
    }
    res.json(babyDetails);
  } catch (error) {
    console.error('Error searching for baby:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
