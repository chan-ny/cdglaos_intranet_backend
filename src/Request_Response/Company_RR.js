const uploadImage = require("../components/uploadImage");
const up = new uploadImage();
const controller = require("../Controller/index");
const company = new controller.CompanyController();

module.exports = {
  async CreateCompany(req, res) {
    up.path = "./src/public/images/company";
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
};
