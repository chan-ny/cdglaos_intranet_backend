const controller = require("../../Controller/index");
const staff = new controller.StaffController();
const hr = new controller.HumanResourceController();
const type_evaluation = new controller.Type_EvaluationController();
const evaluation = new controller.EvalautionController();

module.exports = {
  CreateEvaluation(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((emp) => {
      if (emp.status == 200) {
        hr.selectHR(req.body.hr_Id).then((hmr) => {
          if (hmr.status == 200) {
            type_evaluation
              .selectTEVT(req.body.typevalaution_Id)
              .then((tev) => {
                if (tev.status == 200) {
                  evaluation.createEvaluation(req.body).then((result) => {
                    res.status(result.status).send({
                      ...result,
                    });
                  });
                  return;
                }
                res.status(tev.status).send({
                  ...tev,
                });
              });
            return;
          }
          res.status(hmr.status).send({
            ...hmr,
          });
        });
        return;
      }
      res.status(emp.status).send({
        ...emp,
      });
    });
  },
  UpdateEvaluation(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((emp) => {
      if (emp.status == 200) {
        hr.selectHR(req.body.hr_Id).then((hmr) => {
          if (hmr.status == 200) {
            type_evaluation
              .selectTEVT(req.body.typevalaution_Id)
              .then((tev) => {
                if (tev.status == 200) {
                  evaluation
                    .updateEvaluation(req.params.Id, req.body)
                    .then((result) => {
                      res.status(result.status).send({
                        ...result,
                      });
                    });
                  return;
                }
                res.status(tev.status).send({
                  ...tev,
                });
              });
            return;
          }
          res.status(hmr.status).send({
            ...hmr,
          });
        });
        return;
      }
      res.status(emp.status).send({
        ...emp,
      });
    });
  },
  RemoveEvaluation(req, res) {
    evaluation.removeEvaluation(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetEvaluation(req, res) {
    evaluation.getEvaluation(req.body.hr_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
