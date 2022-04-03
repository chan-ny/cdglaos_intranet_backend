
const { Training } = require("../../Model");
const Multer = require("multer");
const fs = require("fs");

let pathImage = "";
let storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/training");
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

let uploadSingle = Multer({ storage: storage }).single("tn_image");

module.exports = {
  async CreateTraining(req, res) {
    await uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        Training.create({
          employee_Id: req.body.employee_Id,
          typetraining_Id: req.body.typetraining_Id,
          tn_content: req.body.tn_content,
          tn_image: pathImage,
        })
          .then((result) => {
            res.status(200).send({
              msg: "Create Training of Employee is sucess",
              rs: result,
            });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    });
  },
  async UpdateImageTraining(req, res) {
    const training = await Training.findByPk(req.params.Id);
    if (Training) {
      // remove images old
      await fs.unlink("./public/images/training/" + training.tn_image, (err) => {
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
          training
            .update({
              tn_image: pathImage,
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
        msg: "Training Id is not found",
      });
    }
  },

  async UpdateTextTraining(req, res) {
    const training = await Training.findByPk(req.params.Id);
    if (training) {
      training.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Training of Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "Training Id is not found",
      });
    }
  },

  async RemoveTraining(req, res) {
    const training = await Training.findByPk(req.params.Id);
    if (training) {
      // remove images old
      await fs.unlink("./public/images/training/" + training.tn_image, (err) => {
        if (err) {
          res.send(err);
        }
      });
      training.destroy().then((result) => {
        res.status(200).send({
          msg: "Remove Training is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "Training Id is not fuond",
      });
    }
  },
  async DisplayTraining(req, res) {
    const training = await Training.findOne({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (training) {
      res.status(200).send({
        msg: "Display is Training",
        rs: training,
      });
    } else {
      res.status(404).send({
        msg: "Training Id is not fuond",
      });
    }
  },
};
