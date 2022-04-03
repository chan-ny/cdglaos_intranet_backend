const { Highschool } = require("../../Model");

module.exports = {
  async CreateHighschool(req, res) {
    await Highschool.create(req.body)
      .then((result) => {
        res.status(200).send({
          msg: "Create Highschool for employee is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  async UpdateHighschool(req, res) {
    const highschool = await Highschool.findByPk(req.params.Id);
    if (highschool) {
      highschool.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Highschool for Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "The Highschool Id is not found",
      });
    }
  },
  async RemoveHighschool(req, res) {
    const highschool = await Highschool.findByPk(req.params.Id);
    if (highschool) {
        highschool.destroy().then((result) => {
        res.status(200).send({
          msg: "Delete Highschool of employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "Highschool Id is not found",
      });
    }
  },
  async AllHighschool(req, res) {
    const highschool = await Highschool.findAll({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (highschool.length != 0) {
      res.status(200).send({
        msg: "All fine Highschool of employee",
        count: highschool.length,
        rs: highschool,
      });
    } else {
      res.status(404).send({
        msg: "Experience Id is not found",
      });
    }
  },
};
