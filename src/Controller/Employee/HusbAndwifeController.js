const { HusbandWife } = require("../../Model");

module.exports = {
    async CreateHusbandWife(req, res) {
      await HusbandWife.create(req.body)
        .then((result) => {
          res.status(200).send({
            msg: "Create HusbandWife for employee is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    },
    async UpdateHusbandWife(req, res) {
      const husbandwife = await HusbandWife.findByPk(req.params.Id);
      if (husbandwife) {
        husbandwife.update(req.body).then((result) => {
          res.status(201).send({
            msg: "Update HusbandWife for Employee is success",
            rs: result,
          });
        });
      } else {
        res.status(500).send({
          msg: "The HusbandWife Id is not found",
        });
      }
    },
    async RemoveHusbandWife(req, res) {
      const husbandwife = await HusbandWife.findByPk(req.params.Id);
      if (husbandwife) {
          husbandwife.destroy().then((result) => {
          res.status(200).send({
            msg: "Delete HusbandWife of employee is success",
            rs: result,
          });
        });
      } else {
        res.status(500).send({
          msg: "HusbandWife Id is not found",
        });
      }
    },
    async AllHusbandWife(req, res) {
      const husbandwife = await HusbandWife.findAll({
        where: {
          employee_Id: req.body.employee_Id,
        },
      });
      if (husbandwife.length != 0) {
        res.status(200).send({
          msg: "All fine HusbandWife of employee",
          count: husbandwife.length,
          rs: husbandwife,
        });
      } else {
        res.status(404).send({
          msg: "Experience Id is not found",
        });
      }
    },
  };