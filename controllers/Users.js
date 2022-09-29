const mysql = require('../config/db');
const validator = require('email-validator')


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

  exports.save = async (req, res) => {
    const { id_usuario, nome, sobrenome, email, telefone, cpf } = req.body;
    const emailValid = validator.validate(email);
  
    if(nome === '' || nome === 0){
      return res.status(400).send({
        err: "This name cannot be entered"
    })
    } 
    else if(!emailValid){
      return res.status(400).send({
        err: "Email already in use"
    })
  
    }
    mysql.query(
      "INSERT INTO usuarios (id_usuario, nome, sobrenome, email, telefone, cpf) VALUES (default,?,?,?,?,?)",
      [id_usuario, nome, sobrenome, email, telefone, cpf,],
      (err, rows) => {
        
        if (err) {
          return res.status(400).send({
            err,
          });
        } else {
          return res.status(200).send({
            message: "User successfully created",
          });
        }
      }
    );
  };
  