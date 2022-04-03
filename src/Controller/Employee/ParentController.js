const { Parent } = require("../../Model");

module.exports = {
  async CreateParent(req, res) {
    await Parent.create(req.body)
      .then((result) => {
        res.status(200).send({
          msg: "Create Parent for employee is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  async UpdateParent(req, res) {
    const parent = await Parent.findByPk(req.params.Id);
    if (parent) {
      parent.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Parent for Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "The Parent Id is not found",
      });
    }
  },
  async RemoveParent(req, res) {
    const parent = await Parent.findByPk(req.params.Id);
    if (parent) {
      parent.destroy().then((result) => {
        res.status(200).send({
          msg: "Delete Parent of employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "Parent Id is not found",
      });
    }
  },
  async AllParent(req, res) {
    const parent = await Parent.findAll({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (parent.length != 0) {
      res.status(200).send({
        msg: "All fine Parent of employee",
        count: parent.length,
        rs: parent,
      });
    } else {
      res.status(404).send({
        msg: "Experience Id is not found",
      });
    }
  },
};
