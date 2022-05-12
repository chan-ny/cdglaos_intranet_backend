const controller = require("../../Controller/index");
const hr = new controller.HumanResourceController();
const policy = new controller.PolicyController();

module.exports = {
  CreatePolicy(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        policy.createPolicy(req.body).then((rs) => {
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
  UpdatePplicy(req, res) {
    hr.selectHR(req.body.hr_Id).then((result) => {
      if (result.status == 200) {
        policy.updatePolicy(req.params.Id, req.body).then((rs) => {
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
  RemovePolicy(req, res) {
    policy.removePolicy(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetPolicy(req, res) {
    policy.getPolicy(req.body.hr_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
