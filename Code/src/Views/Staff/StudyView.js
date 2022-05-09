const controller = require("../../Controller/index");
const study = new controller.StudyController();
const staff = new controller.StaffController();

const uploadImage = require("../../components/uploadImage");
const up = new uploadImage();
module.exports = {
  CreateStudy(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        study
          .createStudy({
            employee_Id: req.body.employee_Id,
            std_name: req.body.std_name,
            std_instilutional: req.body.std_instilutional,
            std_faculty: req.body.std_faculty,
            std_major: req.body.std_major,
            std_grade: req.body.std_grade,
            std_Image: "default_iamge.jpg",
            std_fromDate: req.body.std_fromDate,
            std_toDate: req.body.std_toDate,
          })
          .then((sd) => {
            res.status(sd.status).send({
              ...sd,
            });
          });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  ModifyImage(req, res) {
    study.selectStudy(req.params.Id).then((result) => {
      if (result.status == 200) {
        up.path = "./public/images/study";
        up.uploadSingle(req, res, (err) => {
          if (err) {
            res.end("Error Upload file image");
          } else {
            study.modifyImage_Study(req.params.Id, up.pathImage).then((sd) => {
              res.status(sd.status).send({
                ...sd,
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
  ChengeImage(req, res) {
    study.selectStudy(req.params.Id).then((result) => {
      if (result.status == 200) {
        up.getUnlink("./public/images/study/" + result.rs.dataValues.std_Image);
        up.path = "./public/images/study";
        up.uploadSingle(req, res, (err) => {
          if (err) {
            res.end("Error Upload file image");
          } else {
            study.modifyImage_Study(req.params.Id, up.pathImage).then((sd) => {
              res.status(sd.status).send({
                ...sd,
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
  UpdateStudy(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((rs) => {
      if (rs.status == 200) {
        study.updateStudy(req.params.Id, req.body).then((result) => {
          res.status(result.status).send({
            ...result,
          });
        });
        return;
      }
      res.status(rs.status).send({
        ...rs,
      });
    });
  },
  RemoveStudy(req, res) {
    study.removeStudy(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetStudy(req, res) {
    study.getStudy(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
