const { User } = require('../../database/index.js');

// const getGratitudes = ()
// model get all grats, then controller could handle specific request top 3 (plus another
// controller could use same getGrat to grab all)
// get all grats
// grab top 3
// respond with top 3

const getGratitudes = () => (
  User.findOne({ email: 'dko289@gmail.com' })
    .then((user) => user.gratitudes)
    .catch((err) => console.log('error retrieving gratitudes: ', err))
);

const postGratitude = (gratArray) => (
  User.findOne({ email: 'dko289@gmail.com' })
    .then((user) => {
      for (let i = 0; i < gratArray.length; i++) {
        if (user.gratitudes[gratArray[i]] === undefined) {
          user.gratitudes[gratArray[i]] = 1;
        } else {
          user.gratitudes[gratArray[i]]++;
        }
      }
      return User.updateOne({ email: 'dko289@gmail.com' }, { gratitudes: user.gratitudes });
    })
);

const insertUser = (user) => {
  User.create(user);
};

module.exports = {
  getGratitudes,
  postGratitude,
  insertUser,
};
