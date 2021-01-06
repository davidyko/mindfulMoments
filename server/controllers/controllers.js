const path = require("path");
const {
  getGratitudes,
  postGratitude,
  insertUser,
} = require("../models/models.js");

const getTopGrats = (req, res) => {
  getGratitudes()
    .then((gratitudes) => {
      let topGrats = [];
      const allGrats = Object.entries(gratitudes);
      allGrats.sort((a, b) => b[1] - a[1]);
      topGrats = allGrats.slice(0, 3);
      res.send(
        topGrats.map(
          (word) => word[0].charAt(0).toUpperCase() + word[0].slice(1)
        )
      );
    })
    .catch((err) => console.log("getTopGrats err: ", err));
};

const createUser = (req, res) => {
  insertUser(req.body);
};

const updateGrats = (req, res) => {
  console.log("controller put", req.body);
  const gratArr = req.body.gratitudes.split(" ");
  postGratitude(gratArr)
    .then(() => res.sendStatus(204))
    .catch((err) => res.status(401).send(err));
};

module.exports = {
  getTopGrats,
  createUser,
  updateGrats,
};
