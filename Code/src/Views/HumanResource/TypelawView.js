const controller = require("../../Controller/index");
const type_law = new controller.TypeLawController();
const hr = new controller.HumanResourceController();
module.exports = {
  CreateTypeLaw(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        type_law.createTypeLaw(req.body).then((rs) => {
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
  UpdateTypeLaw(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        type_law.updateTypeLaw(req.params.Id, req.body).then((rs) => {
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
  RemoveTypeLaw(req, res) {
    type_law.removeTypeLaw(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetTypeLaw(req, res) {
    type_law.getTypeLaw(req.body.hr_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
