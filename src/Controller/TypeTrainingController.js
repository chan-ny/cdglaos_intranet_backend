const { TypeTraining } = require("../Model");

module.exports = {
  async CreateTypeTraining(req, res) {
    await TypeTraining.create(req.body)
      .then((result) => {
        return res.status(200).send({
          msg: "Create TypeTraining is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async UpdateTypeTraining(req, res) {
    const typetraining = await TypeTraining.findByPk(req.body.Id);
    if (typetraining) {
      await typetraining
        .update(req.body)
        .then((result) => {
          res.status(201).send({
            msg: "Update TypeTraining is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "TypeTraining Id is not found",
      });
    }
  },
  async DeleteTypeTraining(req, res) {
    const typetraining = await TypeTraining.findByPk(req.params.Id);
    if (typetraining) {
      await typetraining
        .destroy()
        .then((result) => {
          res.status(201).send({
            msg: "Delete TypeTraining is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "TypeTraining Id is not found",
      });
    }
  },
  async AllTypeTraining(req, res) {
    await TypeTraining.findAll()
      .then((result) => {
        res.status(200).send({
          msg: "all find of TypeTraining",
          count: result.length,
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async SelectTypeTraining(req, res) {
    await TypeTraining.findAll({
      attributes: ["ttn_Id", "ttn_name", "ttn_status"],
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
