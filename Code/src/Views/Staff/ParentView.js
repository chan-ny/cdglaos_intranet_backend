const controller = require("../../Controller/index");
const parent = new controller.ParnetController();
const staff = new controller.StaffController();

module.exports = {
  CreateParent(req, res) {
    staff.selectEmployee(req.body);
  },
};
