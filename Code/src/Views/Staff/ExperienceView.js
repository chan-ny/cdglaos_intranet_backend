const controller = require("../../Controller/index");
const experience = new controller.ExperienceController();
const staff = new controller.StaffController();

module.exports = {
  CreateExperience(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        experience
          .createExperience({
            employee_Id: req.body.employee_Id,
            epr_companyName: req.body.epr_companyName,
            epr_fromdate: req.body.epr_fromdate,
            epr_toDate: req.body.epr_toDate,
            epr_position: req.body.epr_position,
            epr_salary: req.body.epr_salary,
            epr_detail: req.body.epr_detail,
          })
          .then((exp) => {
            res.status(exp.status).send({
              ...exp,
            });
          });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateExperience(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        experience.updateExperience(req.params.Id, req.body).then((epr) => {
          res.status(epr.status).send({
            ...epr,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveExperience(req, res) {
    experience.removeExperienc(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetExperience(req, res) {
    experience.getExperience(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
