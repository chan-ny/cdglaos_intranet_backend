const uploadImage = require("../components/uploadImage");
const up = new uploadImage();
const controller = require("../Controller/index");
const company = new controller.CompanyController();
const { Company } = require("../Model");

module.exports = {
  async CreateCompany(req, res) {
    up.path = "./public/images/company";
    await up.uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        company.createCompany(req.body, up.pathImage).then((result) => {
          res.status(result.status).send({
            ...result,
          });
        });
      }
    });
  },
  async UpdateCompanyImage(req, res) {
    const company = await Company.findByPk(req.params.Id);
    if (company) {
      await up.getUnlink("./public/images/company/" + company.cpn_logo);
      up.path = "./public/images/company";
      await up.uploadSingle(req, res, (err) => {
        if (err) {
          res.end("Error Upload file image");
        } else {
          company
            .update({
              cpn_logo: up.pathImage,
            })
            .then(() => {
              res.status(200).send({
                status: 200,
                msg: "Update Company Image is success",
              });
            });
        }
      });
    } else {
      res.status(404).send({
        status: 404,
        msg: "The Company Id is not found",
      });
    }
  },
  async UpdateCompanyText(req, res) {
    company.updateCompanyText(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async DisableCompany(req, res) {
    company.disableCompany(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async RenewCompany(req, res) {
    company.renewCompnany(req.params.Id, req.query.mDateTime).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
