const { IndentityCard } = require("../../Model");
const Multer = require("multer");
const fs = require("fs");

let pathImage = "";
let storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/indentitycard");
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

let uploadSingle = Multer({ storage: storage }).single("ind_image");

module.exports = {
  async CreateIndentityCard(req, res) {
    await uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        IndentityCard.create({
          employee_Id: req.body.employee_Id,
          ind_nocard: req.body.ind_nocard,
          ind_approvedDate: req.body.ind_approvedDate,
          ind_expiredDate: req.body.ind_expiredDate,
          ind_location: req.body.ind_location,
          ind_image: pathImage,
        })
          .then((result) => {
            res.status(200).send({
              msg: "Create IndentityCard of Employee is sucess",
              rs: result,
            });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    });
  },
  async UpdateImageIDTTC(req, res) {
    const indentittycard = await IndentityCard.findByPk(req.params.Id);
    if (indentittycard) {
      // remove images old
      await fs.unlink(
        "./public/images/IndentityCard/" + indentittycard.ind_image,
        (err) => {
          if (err) {
            res.send(err);
          }
        }
      );

      // add new Image
      await uploadSingle(req, res, (err) => {
        if (err) {
          res.end("Error Upload file image");
        } else {
          // update image old
          indentittycard
            .update({
              ind_image: pathImage,
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
        msg: "IndentityCard Id is not found",
      });
    }
  },

  async UpdateTextIndentityCard(req, res) {
    const indentittycard = await IndentityCard.findByPk(req.params.Id);
    if (indentittycard) {
      indentittycard.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update IndentityCard of Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "IndentityCard Id is not found",
      });
    }
  },

  async RemoveIndentityCard(req, res) {
    const indentittycard = await IndentityCard.findByPk(req.params.Id);
    if (indentittycard) {
      // remove images old
      await fs.unlink(
        "./public/images/IndentityCard/" + indentittycard.ind_image,
        (err) => {
          if (err) {
            res.send(err);
          }
        }
      );
      indentittycard.destroy().then((result) => {
        res.status(200).send({
          msg: "Remove IndentityCard is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "IndentityCard Id is not fuond",
      });
    }
  },
  async DisplayIndentityCard(req, res) {
    const indentittycard = await IndentityCard.findOne({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (indentittycard) {
      res.status(200).send({
        msg: "Display is IndentityCard",
        rs: indentittycard,
      });
    } else {
      res.status(404).send({
        msg: "IndentityCard Id is not fuond",
      });
    }
  },
};
