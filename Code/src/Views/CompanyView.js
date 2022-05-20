const uploadImage = require("../components/uploadImage");
const up = new uploadImage();
const controller = require("../Controller/index");
const company = new controller.CompanyController();
const { Company } = require("../Model");

module.exports = {
  CreateCompany(req, res) {
    company.createCompany(req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
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
  UpdateCompanyText(req, res) {
    company.updateCompanyText(req.params.Id, req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  DisableCompany(req, res) {
    company.disableCompany(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RenewCompany(req, res) {
    company
      .renewCompnany(req.params.Id, req.body.cpn_endDate)
      .then((result) => {
        res.status(result.status).send({
          ...result,
        });
      });
  },
  AllCompany(req, res) {
    const { page, size } = req.query;
    company.allCompany(page, size).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveCompany(req, res) {
    company.removeCompany(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
