const { Bookfimary } = require("../../Model");
const Multer = require("multer");
const fs = require("fs");
const res = require("express/lib/response");

let pathImage = [];
let storage = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/bookfimaly");
  },
  filename: (req, file, cb) => {
    const fn =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 100) +
      ".jpg";
    pathImage.push(fn);
    cb(null, fn);
  },
});

let uploadArray = Multer({ storage: storage }).array("bf_image");

module.exports = {
  async CreateBookfimaly(req, res) {
    await uploadArray(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        Bookfimary.create({
          employee_Id: req.body.employee_Id,
          bf_nohome: req.body.no_home,
          bf_unit: req.body.unit,
          bf_approvedDate: req.body.approved_date,
          bf_expiredDate: req.body.expired_date,
          bf_location: req.body.location,
          bf_image: pathImage,
        })
          .then((result) => {
            res.status(200).send({
              msg: "Create bookfimaly of Employee is sucess",
              rs: result,
            });
          })
          .catch((err) => {
            res.status(500).send(err);
          });
      }
    });
  },
  async RemoveImageBF(req, res) {
    const bookfimaly = await Bookfimary.findByPk(req.params.Id);
    if (bookfimaly) {
      const qr = req.query.image;
      const imageOld = bookfimaly.bf_image
        .replace(/['"]+/g, "")
        .replace(/(^.*\[|\].*$)/g, "")
        .split(",");
      const index = imageOld.indexOf(qr);
      if (index > -1) {
        imageOld.splice(index, 1);
      }
      // remove images old
      await fs.unlink("./public/images/bookfimaly/" + qr, (err) => {
        if (err) {
          res.send(err);
        }
      });
      // update image old
      await bookfimaly
        .update({
          bf_image: imageOld,
        })
        .then((result) => {
          res.status(201).send({
            msg: "Remove Image is success",
            rs: result,
          });
        });
    } else {
      res.status(404).send({
        msg: "Bookfimaly Id is not found",
      });
    }
  },
  async AddImageBF(req, res) {
    const bookfimaly = await Bookfimary.findByPk(req.params.Id);
    if (bookfimaly) {
      const oldimage = bookfimaly.bf_image
        .replace(/['"]+/g, "")
        .replace(/(^.*\[|\].*$)/g, "")
        .split(",");
      await uploadArray(req, res, (err) => {
        if (err) {
          res.end("Error upload file image");
        } else {
          for (let index = 0; index < pathImage.length; index++) {
            const element = pathImage[index];
            oldimage.push(element);
          }
          //update new image
          bookfimaly
            .update({
              bf_image: oldimage,
            })
            .then((result) => {
              res.status(200).send({
                msg: "Update bookfimaly new image is sucess",
                rs: result,
              });
            });
        }
      });
    } else {
      res.status(404).send({
        msg: "Bookfimaly id is not found",
      });
    }
  },
  async UpdateBF(req, res) {
    const bookfimaly = await Bookfimary.findByPk(req.params.Id);
    if (bookfimaly) {
      bookfimaly.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Bookfimaly of Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(404).send({
        msg: "Bookfimaly Id is not found",
      });
    }
  },
  async DisplayBookfimaly(req, res) {
    const bookfimaly = await Bookfimary.findOne({
      where: {
        employee_Id: req.body.employee_Id,
      },
    }).then((result) => {
      res.status(200).send({
        msg: "Display is bookfimaly",
        rs: result,
      });
    });
  },
};
