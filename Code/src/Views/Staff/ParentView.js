const controller = require("../../Controller/index");
const parent = new controller.ParnetController();
const staff = new controller.StaffController();

module.exports = {
  CreateParent(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        parent.createParent(req.body).then((pr) => {
          res.status(pr.status).send({
            ...pr,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateParent(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        parent.updateParnet(req.params.Id, req.body).then((pr) => {
          res.status(pr.status).send({
            ...pr,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveParent(req, res) {
    parent.removeParent(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetParent(req, res) {
    parent.getParent(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
