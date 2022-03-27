const { Province } = require("../Model");

module.exports = {
  async CreateProvince(req, res) {
    await Province.create(req.body)
      .then((result) => {
        return res.status(200).send({
          msg: "Create Province is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async UpdateProvince(req, res) {
    const province = await Province.findByPk(req.body.Id);
    if (province) {
      await province
        .update(req.body)
        .then((result) => {
          res.status(201).send({
            msg: "Update Province is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "Province Id is not found",
      });
    }
  },
  async DeleteProvince(req, res) {
    const province = await Province.findByPk(req.params.Id);
    if (province) {
      await province
        .destroy()
        .then((result) => {
          res.status(201).send({
            msg: "Delete Province is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "Province Id is not found",
      });
    }
  },
  async AllProvince(req, res) {
    await Province.findAll()
      .then((result) => {
        res.status(200).send({
          msg: "all find of Province",
          count: result.length,
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async SelectProvince(req, res) {
    await Province.findAll({
      attributes: ["pv_Id", "pv_laoName", "pv_engName", "pv_status"],
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
