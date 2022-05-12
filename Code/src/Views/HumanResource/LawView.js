const controller = require("../../Controller/index");
const typelaw = new controller.TypeLawController();
const hr = new controller.HumanResourceController();
const law = new controller.LawController();

module.exports = {
  CreateLaw(req, res) {
    typelaw.selectTypeLaw(req.body.typeLaw_Id).then((result) => {
      if (result.status == 200) {
        hr.selectHR(req.body.hr_Id).then((rs) => {
          if (rs.status == 200) {
            law.createLaw(req.body).then((law) => {
              res.status(law.status).send({
                ...law,
              });
            });
            return;
          }
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
  UpdateLaw(req, res) {
    typelaw.selectTypeLaw(req.body.typeLaw_Id).then((result) => {
      if (result.status == 200) {
        hr.selectHR(req.body.hr_Id).then((rs) => {
          if (rs.status == 200) {
            law.updateLaw(req.params.Id, req.body).then((law) => {
              res.status(law.status).send({
                ...law,
              });
            });
            return;
          }
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
  RemoveLaw(req, res) {
    law.removeLaw(req.params.Id).then(result => {
      res.status(result.status).send({
        ...result,
      });
    })
  },
  GetLaw(req, res) {
    law.getLaw(req.body.hr_Id).then(result => {
      res.status(result.status).send({
        ...result,
      });
    })
  }
};
