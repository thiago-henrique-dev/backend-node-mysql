const mysql = require('../config/db');

exports.getUsers = async (req, res, next) => {
    mysql.query("SELECT * FROM usuarios", (err, rows) => {
      if (err) {
        return res.status(400).send({
          err,
        });
      } else {
        return res.status(200).send({
          data: rows,
        });
      }
    });
  };