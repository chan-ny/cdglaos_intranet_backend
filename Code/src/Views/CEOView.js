const controller = require("../Controller/index");
const ceo = new controller.CEOcontroller();
const company = new controller.CompanyController();
const users = new controller.Usercontroller();
const uploadImage = require("../components/uploadImage");
const up = new uploadImage();

module.exports = {
  CreateCEO(req, res) {
    company.getCompany(req.body.company_Id).then((result) => {
      if (result.status == 200) {
        //need require data body of user together
        users.registerUser(req.body).then((result) => {
          if (result.status == 200) {
            ceo
              .createCEO({
                company_Id: req.body.company_Id,
                user_Id: result.rs.dataValues.uer_Id,
                ceo_name: req.body.ceo_name,
                ceo_phone: req.body.ceo_phone,
                ceo_tell: req.body.ceo_tell,
                ceo_image: "default_iamge.jpg",
              })
              .then((result) => {
                res.status(result.status).send({
                  ...result,
                });
              });
          } else {
            res.status(result.status).send({
              ...result,
            });
          }
        });
      } else {
        res.status(result.status).send({
          ...result,
        });
      }
    });
  },
  async UploadProfile(req, res) {
    up.path = "./public/images/ceo";
    await up.uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        ceo.uploadProfile(req.params.Id, up.pathImage).then((result) => {
          if (result.status == 404) {
            up.getUnlink("./public/images/ceo/" + up.pathImage);
          }
          res.status(result.status).send({
            ...result,
          });
        });
      }
    });
  },
  async ChangeProfile(req, res) {
    await ceo.getCEO(req.params.Id).then((result) => {
      if (result.status == 404) {
        res.status(result.status).send({
          ...result,
        });
        return;
      }
      up.getUnlink("./public/images/ceo/" + result.rs.dataValues.ceo_image);
      up.path = "./public/images/ceo";
      up.uploadSingle(req, res, (err) => {
        if (err) {
          res.end("Error Upload file image");
        } else {
          ceo.uploadProfile(req.params.Id, up.pathImage).then((result) => {
            res.status(result.status).send({
              ...result,
            });
          });
        }
      });
    });
  },
  UpdateCEOText(req, res) {
    ceo.updateCEO(req.params.Id, req.body).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  async RemoveCEO(req, res) {
    await ceo.getCEO(req.params.Id).then((result) => {
      if (result.status == 404) {
        res.status(result.status).send({
          ...result,
        });
        return;
      }
      if (result.rs.dataValues.ceo_image !== "default_iamge.jpg") {
        up.getUnlink("./public/images/ceo/" + result.rs.dataValues.ceo_image);
      }
      ceo.removeCEO(req.params.Id).then((result) => {
        res.status(result.status).send({
          ...result,
        });
      });
    });
  },
  AllCEO(req, res) {
    ceo.allCEO().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
