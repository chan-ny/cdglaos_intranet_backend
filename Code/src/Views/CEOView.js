const controller = require("../Controller/index");
const ceo = new controller.CEOcontroller();
const company = new controller.CompanyController();

module.exports = {
  CreateCEO(req, res) {
    company.getCompany(req.query.company_Id).then((result) => {
      if (result.status) {
      } else {
        res.status(result.status).send({
          ...result,
        });
      }
    });
  },
};
