const User = require('../../db/models');

const checkSeller = (req, res, next) => {
  if (req.User.isSeller) {
    next();
  } else {
    res.status(403).send('No admon rights');
  }
};
module.exports = { checkSeller };
