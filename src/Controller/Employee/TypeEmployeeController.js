const { TypeEmployee } = require("../../Model");

module.exports = {
  async CreateTypeEmployee(req, res) {
    await TypeEmployee.create(req.body)
      .then((result) => {
        return res.status(200).send({
          msg: "Create TypeEmployee is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async UpdateTypeEmployee(req, res) {
    const typeemployee = await TypeEmployee.findByPk(req.body.id);
    if (typeemployee) {
      await typeemployee
        .update(req.body)
        .then((result) => {
          res.status(201).send({
            msg: "Update TypeEmployee is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "TypeEmployee Id is not found",
      });
    }
  },
  async DeleteTypeEmployee(req, res) {
    const typeemployee = await TypeEmployee.findByPk(req.params.Id);
    if (typeemployee) {
      await typeemployee
        .destroy()
        .then((result) => {
          res.status(201).send({
            msg: "Delete TypeEmployee is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "TypeEmployee Id is not found",
      });
    }
  },
  async AllTypeEmployee(req, res) {
    await TypeEmployee.findAll()
      .then((result) => {
        res.status(200).send({
          msg: "all find of TypeEmployee",
          count: result.length,
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async SelectTypeEmployee(req, res) {
    await TypeEmployee.findAll({
      attributes: ["tepy_id", "tepy_Name", "tepy_status"],
    })
      .then((result) => {
        res.status(200).send({
          msg: "All fine of Type Training",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
};
