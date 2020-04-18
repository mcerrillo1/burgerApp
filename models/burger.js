const orm = require("../config/orm.js");

const burger = {
  selectAll: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: (newBurger, cb) => {
    orm.create("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  updateOne: (burgerData, criteria, cb) => {
    orm.update("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;