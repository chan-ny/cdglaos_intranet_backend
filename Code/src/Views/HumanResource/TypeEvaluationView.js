const controller = require("../../Controller/index");
const hr = new controller.HumanResourceController();
const type_evaluation = new controller.Type_EvaluationController();

module.exports = {
  CreateType_Evaluation(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        type_evaluation.createTEVT(req.body).then((rs) => {
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
  UpdateType_Evaluation(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        type_evaluation.updateTEVT(req.params.Id, req.body).then((rs) => {
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
  RemoveType_Evaluation(req, res) {
    type_evaluation.removeTEVT(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetType_Evaluation(req, res) {
    type_evaluation.getTEVT(req.body.hr_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
