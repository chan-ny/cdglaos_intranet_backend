const { Employee } = require("../../Model");
const Multer = require("multer");
const fs = require("fs");
const { Op } = require("sequelize");

let uniqueSuffix = "";
let storage = Multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images/employee");
  },
  filename: function (req, file, callback) {
    uniqueSuffix =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 100) +
      ".jpg";
    callback(null, uniqueSuffix);
  },
});

let uploadSingle = Multer({ storage: storage }).single("emp_image"); // sigle image

module.exports = {
  async CreateEmployee(req, res) {
    await uploadSingle(req, res, function (err) {
      if (err) {
        res.end("Error Oplad File single...");
      } else {
        Employee.create({
          user_Id: req.body.user_Id,
          typeEmployee_Id: req.body.typeEmployee_Id,
          gender_Id: req.body.gender_Id,
          province_Id: req.body.province_Id,
          district_Id: req.body.district_Id,
          emp_name: req.body.fristname,
          emp_lastname: req.body.lastname,
          emp_engname: req.body.englishname,
          emp_birstday: req.body.bristday,
          emp_age: req.body.age,
          emp_race: req.body.race,
          emp_nationality: req.body.nationality,
          emp_religoin: req.body.religoin,
          emp_phone: req.body.phone,
          emp_tell: req.body.tell,
          emp_image: uniqueSuffix,
          emp_fimalyMember: req.body.fimalyMember,
          emp_character: req.body.character,
          emp_heigh: req.body.heigh,
          emp_weight: req.body.weight,
          emp_manMember: req.body.manMember,
          emp_womenMember: req.body.womenMember,
          emp_childrenLevel: req.body.childrenLevel,
          emp_status: req.body.status,
        })
          .then((result) => {
            res.status(200).send({
              msg: "Create Employee is success",
              rs: result,
            });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    });
  },
  async UpdateEmployee(req, res) {
    const employee = await Employee.findByPk(req.params.Id);
    const state = req.query.upimage;
    if (employee) {
      if (state == 1) {
        // remove images old
        await fs.unlink(
          "./public/images/employee/" + employee.emp_image,
          (err) => {
            if (err) {
              res.send(err);
            }
          }
        );
        // add now image
        await uploadSingle(req, res, function (err) {
          if (err) {
            res.end("Error Oplad File single...");
          } else {
            employee
              .update({
                emp_image: uniqueSuffix, // update new image to tb
              })
              .then((result) => {
                res.status(201).send({
                  msg: "Update Employee is success",
                  rs: result,
                });
              });
          }
        });
      } else {
        employee
          .update({
            user_Id: req.body.user_Id,
            typeEmployee_Id: req.body.typeEmployee_Id,
            gender_Id: req.body.gender_Id,
            province_Id: req.body.province_Id,
            district_Id: req.body.district_Id,
            emp_name: req.body.fristname,
            emp_lastname: req.body.lastname,
            emp_engname: req.body.englishname,
            emp_birstday: req.body.bristday,
            emp_age: req.body.age,
            emp_race: req.body.race,
            emp_nationality: req.body.nationality,
            emp_religoin: req.body.religoin,
            emp_phone: req.body.phone,
            emp_tell: req.body.tell,
            emp_fimalyMember: req.body.fimalyMember,
            emp_character: req.body.character,
            emp_heigh: req.body.heigh,
            emp_weight: req.body.weight,
            emp_manMember: req.body.manMember,
            emp_womenMember: req.body.womenMember,
            emp_childrenLevel: req.body.childrenLevel,
          })
          .then((result) => {
            res.status(201).send({
              msg: "Update Employee is success",
              rs: result,
            });
          });
      }
    } else {
      res.status(404).send({
        msg: "Employee Id is notfound",
      });
    }
  },
  async StatusEmployee(req, res) {
    const employee = await Employee.findByPk(req.params.Id);
    if (employee) {
      employee
        .update({
          emp_status: req.body.status,
        })
        .then((result) => {
          res.status(200).send({
            msg: "Update Status Employee is success",
            rs: result,
          });
        });
    } else {
      res.status(404).send({
        msg: "Employee Id is not found",
      });
    }
  },
  async RemoveEmployee(req, res) {
    const employee = await Employee.findByPk(req.params.Id);
    if (employee) {
      employee
        .update({
          emp_status: "off",
        })
        .then((result) => {
          res.status(200).send({
            msg: "Update Status Employee is success",
            rs: result,
          });
        });
    } else {
      res.status(404).send({
        msg: "Employee Id is not found",
      });
    }
  },
  async AllEmployee(req, res) {
    await Employee.findAll({
      where: {
        emp_status: {
          [Op.ne]: "off",
        },
      },
    }).then((result) => {
      res.status(200).send({
        msg: "All fine of Employee",
        count: result.length,
        rs: result,
      });
    });
  },
  async SelectEmployee(req, res) {
    await Employee.findAll({
      attributes: ["emp_Id", "emp_name", "emp_lastname", "emp_engname"],
      where: {
        emp_status: {
          [Op.ne]: "off",
        },
      },
    }).then((result) => {
      res.status(200).send({
        rs: result,
      });
    });
  },
};
