const { BornLocation } = require("../../Model");

module.exports = {
  async CreateBl(req, res) {
    await BornLocation.create(req.body)
      .then((result) => {
        res.status(200).send({
          msg: "Create BornLocation of employee is sucsess",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  async UpdateBl(req, res) {
    const bornLocation = await BornLocation.findByPk(req.params.Id);
    if (bornLocation) {
      bornLocation.update(req.body).then((result) => {
        res.status(200).send({
          msg: "Update Bornlocation is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "Born location Id is not found",
      });
    }
  },
  async DeleteBL(req, res) {
    const bornLocation = await BornLocation.findByPk(req.params.Id);
    if (bornLocation) {
      bornLocation.destroy().then((result) => {
        res.status(200).send({
          msg: "Delete born location is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "born location Id is not found",
      });
    }
  },
  async DisplayBL(req, res) {
    const bornLocation = await BornLocation.findOne({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (bornLocation) {
      res.status(200).send({
        msg: "Display Borlocation is success",
        rs: bornLocation,
      });
    } else {
      res.status(404).send({
        msg: "Employee Id is not found",
      });
    }
  },
};
