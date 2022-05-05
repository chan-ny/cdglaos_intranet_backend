const Controller = require("../Controller/index");
const gender = new Controller.GendersContriller();

module.exports = {
  async createGender(req, res) {
    await gender.CreateGender(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async updateGender(req, res) {
    await gender.UpdateGender(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async disableGender(req, res) {
    await gender.DisableGender({ gd_Id: req.params.Id }).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async getGender(req, res) {
    gender.GetGender(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
