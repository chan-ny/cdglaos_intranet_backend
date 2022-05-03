const Multer = require("multer");
const fs = require("fs");

class Uploads {
  // upload
  pathImage;
  path;
  storage = Multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, this.path);
    },
    filename: (req, file, cb) => {
      this.pathImage =
        file.fieldname +
        "-" +
        Date.now() +
        "-" +
        Math.round(Math.random() * 100) +
        ".jpg";
      cb(null, this.pathImage);
    },
  });

  uploadSingle = Multer({ storage: this.storage }).single("image");
  uploadMultiple = Multer({ storage: this.storage }).array("image", 15);
  //remove
  getUnlink(value) {
    let msg = "";
    fs.unlink(value, (err) => {
      if (err) {
        return (msg = {
          status: 500,
          msg: "Can`t Remove old photo",
        });
      }
    });
    return msg;
  }
}

module.exports = Uploads;
