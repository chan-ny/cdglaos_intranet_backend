const { Gender } = require("../Model");

module.exports = {
  async CreateGender(req, res) {
    await Gender.create(req.body)
      .then((result) => {
        return res.status(200).send({
          msg: "Create Gender is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async UpdateGender(req, res) {
    const gender = await Gender.findByPk(req.body.Id);
    if (gender) {
      await gender
        .update(req.body)
        .then((result) => {
          res.status(201).send({
            msg: "Update Gender is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "Gender Id is not found",
      });
    }
  },
  async DeleteGender(req, res) {
    const gender = await Gender.findByPk(req.params.Id);
    if (gender) {
      await gender
        .destroy()
        .then((result) => {
          res.status(201).send({
            msg: "Delete Gender is success",
            rs: result,
          });
        })
        .catch((err) => {
          res.status(501).send(err);
        });
    } else {
      res.status(404).send({
        msg: "Gender Id is not found",
      });
    }
  },
  async AllGender(req, res) {
    await Gender.findAll()
      .then((result) => {
        res.status(200).send({
          msg: "all find of Gender",
          count: result.length,
          rs: result,
        });
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  },
  async SelectGender(req, res) {
    await Gender.findAll({
      attributes: ["gd_Id", "gd_laoName", "gd_engName"],
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
