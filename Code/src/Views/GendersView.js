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
    await gender.UpdateGender(req.params.Id, req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async disableGender(req, res) {
    await gender.DisableGender(req.params.Id, req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  getGender(req, res) {
    gender.GetGender(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  genderDelete(req, res) {
    gender.genderDelete(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GenderAll(req, res) {
    gender.genderAll().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
