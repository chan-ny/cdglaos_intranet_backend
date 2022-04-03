const { Study } = require("../../Model");
const Multer = require("multer");
const fs = require("fs");

let pathImage = "";
let storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/study");
  },
  filename: (req, file, cb) => {
    pathImage =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 100) +
      ".jpg";
    cb(null, pathImage);
  },
});

let uploadSingle = Multer({ storage: storage }).single("std_Image");

module.exports = {
  async CreateStudy(req, res) {
    await uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        Study.create({
          employee_Id: req.body.employee_Id,
          std_name: req.body.std_name,
          std_instilutional: req.body.std_instilutional,
          std_faculty: req.body.std_faculty,
          std_major: req.body.std_major,
          std_grade: req.body.std_grade,
          std_Image: pathImage,
          std_fromDate: req.body.std_fromDate,
          std_toDate: req.body.std_toDate,
        })
          .then((result) => {
            res.status(200).send({
              msg: "Create Study of Employee is sucess",
              rs: result,
            });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    });
  },
  async UpdateImageStudent(req, res) {
    const study = await Study.findByPk(req.params.Id);
    if (study) {
      // remove images old
      await fs.unlink("./public/images/study/" + study.std_Image, (err) => {
        if (err) {
          res.send(err);
        }
      });

      // add new Image
      await uploadSingle(req, res, (err) => {
        if (err) {
          res.end("Error Upload file image");
        } else {
          // update image old
          study
            .update({
              std_Image: pathImage,
            })
            .then((result) => {
              res.status(201).send({
                msg: "Update Image is success",
                rs: result,
              });
            });
        }
      });
    } else {
      res.status(404).send({
        msg: "Study Id is not found",
      });
    }
  },

  async UpdateTextStudy(req, res) {
    const study = await Study.findByPk(req.params.Id);
    if (study) {
      study.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Study of Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "Study Id is not found",
      });
    }
  },

  async RemoveStudy(req, res) {
    const study = await Study.findByPk(req.params.Id);
    if (study) {
      // remove images old
      await fs.unlink("./public/images/study/" + study.std_Image, (err) => {
        if (err) {
          res.send(err);
        }
      });
      study.destroy().then((result) => {
        res.status(200).send({
          msg: "Remove Study is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "Study Id is not fuond",
      });
    }
  },
  async DisplayStudy(req, res) {
    const study = await Study.findOne({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (study) {
      res.status(200).send({
        msg: "Display is Study",
        rs: study,
      });
    } else {
      res.status(404).send({
        msg: "Study Id is not fuond",
      });
    }
  },
};
