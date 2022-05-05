const controller = require("../../Controller/index");
const hr = new controller.HumanResource();
const staff = new controller.StaffController();

module.exports = {
  CreateHR(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        hr.createHR(req.body).then((rs) => {
          res.status(rs.status).send({
            ...rs,
          });
        });
      }
    });
  },
};
