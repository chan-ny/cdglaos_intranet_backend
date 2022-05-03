const controller = require("../Controller/index");
const district = new controller.DistrictController();

module.exports = {
  CreateDistrict(req, res) {
    district.createDistrict(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateDistrict(req, res) {
    district.updateDistrict(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  AllDistrict(req, res) {
    district.allDistrict().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetDistrict(req, res) {
    district.getDistrict(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
