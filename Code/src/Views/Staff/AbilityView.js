const controller = require("../../Controller/index");
const abilty = new controller.AblityController();
const staff = new controller.StaffController();

module.exports = {
  //create
  CreateAbilty(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        abilty.duplicateAbility(req.body.employee_Id).then((rs) => {
          if (rs.status == 200) {
            res.status(rs.status).send({
              ...rs,
            });
            return;
          }
          abilty.createAbility(req.body).then((value) => {
            res.status(value.status).send({
              ...value,
            });
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateAbility(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        abilty.updateAbility(req.params.Id, req.body).then((result) => {
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
  RemoveAbility(req, res) {
    abilty.removeAbility(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetAbility(req, res) {
    abilty.getAbility(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  SelectAbility(req, res) {
    abilty.selectAbility(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
