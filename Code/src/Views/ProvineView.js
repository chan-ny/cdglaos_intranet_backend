const controller = require("../Controller/index");
const provice = new controller.ProvinceController();

module.exports = {
  async CreateProvince(req, res) {
    await provice.createProvince(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async UpdateProvince(req, res) {
    await provice.updateProvince(req.params.Id, req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async RemoveProvince(req, res) {
    await provice.removeProvince(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async AllProvince(req, res) {
    await provice.allProvince().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async GetProvince(req, res) {
    await provice.getProvince(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
