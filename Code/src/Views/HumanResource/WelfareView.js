const controller = require("../../Controller/index");
const hr = new controller.HumanResourceController();
const welfare = new controller.WelFareController();

module.exports = {
  CreateWelfare(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        welfare.createWelfare(req.body).then((rs) => {
          res.status(rs.status).send({
            ...rs,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateWelfare(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        welfare.updateWelfare(req.params.Id, req.body).then((rs) => {
          res.status(rs.status).send({
            ...rs,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveWelfare(req, res) {
    welfare.removeWelfare(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetWelfare(req, res) {
    welfare.getWelfare(req.body.hr_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
