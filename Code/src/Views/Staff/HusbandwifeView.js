const controller = require("../../Controller/index");
const hw = new controller.HusbandwifeController();
const staff = new controller.StaffController();

module.exports = {
  CreateHW(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        hw.createHW(req.body).then((rs) => {
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
  UpdateHW(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        hw.updateHW(req.params.Id, req.body).then((result) => {
          res.status(result.status).send({
            ...result,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveHw(req, res) {
    hw.removeHW(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetHW(req, res) {
    hw.getHW(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
