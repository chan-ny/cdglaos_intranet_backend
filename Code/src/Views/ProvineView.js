const controller = require("../Controller/index");
const provice = new controller.ProvinceController();

module.exports = {
  async CreateProvince(req, res) {
    await provice.createProvince(req.body).then((result) => {
      if (result.status == 200) {
        res.status(result.status).send({
          result,
        });
      } else {
        res.status(result.status).send({
          result,
        });
      }
    });
  },
  async UpdateProvince(req, res) {
    await provice.updateProvince(req.body).then((result) => {
      if (result.status == 200) {
        res.status(result.status).send({
          result,
        });
      } else if (result.status == 404) {
        res.status(result.status).send({
          result,
        });
      } else {
        res.status(result.status).send({
          result,
        });
      }
    });
  },
  async RemoveProvince(req, res) {
    await provice.removeProvince(req.params.Id).then((result) => {
      if (result.status == 200) {
        res.status(result.status).send({
          result,
        });
      } else if (result.status == 404) {
        res.status(result.status).send({
          result,
        });
      } else {
        res.status(result.status).send({
          result,
        });
      }
    });
  },
  async AllProvince(req, res) {
    await provice.allProvince().then((result) => {
      if (result.status == 200) {
        res.status(result.status).send({
          result,
        });
      } else {
        res.status(result.status).send({
          result,
        });
      }
    });
  },
  async GetProvince(req, res) {
    await provice.getProvince({ pv_Id: req.params.Id }).then((result) => {
      if (result.status == 200) {
        res.status(result.status).send({
          result,
        });
      } else if (result.status == 404) {
        res.status(result.status).send({
          result,
        });
      } else {
        res.status(result.status).send({
          result,
        });
      }
    });
  },
};
