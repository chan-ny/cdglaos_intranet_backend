const controller = require("../../Controller/index");
const highschool = new controller.HighSchoolController();
const staff = new controller.StaffController();

module.exports = {
  CreateHS(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        highschool.createHS(req.body).then((hs) => {
          res.status(hs.status).send({
            ...hs,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateHS(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        highschool.updateHS(req.params.Id, req.body).then((hs) => {
          res.status(hs.status).send({
            ...hs,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveHS(req, res) {
    highschool.removeHS(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetHS(req, res) {
    highschool.getHS(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
