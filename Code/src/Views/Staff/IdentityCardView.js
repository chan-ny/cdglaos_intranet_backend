const controller = require("../../Controller/index");
const identitycard = new controller.IdentitycardController();
const staff = new controller.StaffController();
const component = require("../../components/uploadImage");
const up = new component();

module.exports = {
  CreateIdentityCard(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        identitycard.getIdentitycard(req.body.employee_Id).then((ch) => {
          if (ch.status == 200) {
            res.status(ch.status).send({
              ...ch,
            });
            return;
          }
          identitycard
            .createIdentitycard({
              employee_Id: req.body.employee_Id,
              ind_cardNO: req.body.ind_cardNO,
              ind_approvedDate: req.body.ind_approvedDate,
              ind_expiredDate: req.body.ind_expiredDate,
              ind_location: req.body.ind_location,
              ind_image: "default_iamge.jpg",
            })
            .then((rs) => {
              res.status(rs.status).send({
                ...rs,
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
  UpdateImage(req, res) {
    identitycard.selectIdentityCard(req.params.Id).then((result) => {
      if (result.status == 200) {
        up.path = "./public/images/indentitycard";
        up.uploadSingle(req, res, (err) => {
          if (err) {
            res.end("Error Upload file image");
          } else {
            identitycard
              .modifyImage_Indentitycard(req.params.Id, up.pathImage)
              .then((rs) => {
                res.status(rs.status).send({
                  ...rs,
                });
              });
          }
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  // change image
  ChangeImage(req, res) {
    identitycard.selectIdentityCard(req.params.Id).then((result) => {
      if (result.status == 200) {
        up.getUnlink(
          "./public/images/indentitycard/" + result.rs.dataValues.ind_image
        );
        up.path = "./public/images/indentitycard";
        up.uploadSingle(req, res, (err) => {
          if (err) {
            res.end("Error Upload file image");
          } else {
            identitycard
              .modifyImage_Indentitycard(req.params.Id, up.pathImage)
              .then((rs) => {
                res.status(rs.status).send({
                  ...rs,
                });
              });
          }
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateIdentityCard(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((sf) => {
      if (sf.status == 200) {
        identitycard
          .updateIdentiryCard(req.params.Id, req.body)
          .then((result) => {
            res.status(result.status).send({
              ...result,
            });
          });
        return;
      }
      res.status(sf.status).send({
        ...sf,
      });
    });
  },
  RemoveIdentityCard(req, res) {
    identitycard.removeIndentitycard(req.params.Id).then((result) => {
      if (result.status == 200) {
        up.getUnlink(
          "./public/images/indentitycard/" + result.rs.dataValues.ind_image
        );
        res.status(result.status).send({
          ...result,
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetIdentitycard(req, res) {
    identitycard.getIdentitycard(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
