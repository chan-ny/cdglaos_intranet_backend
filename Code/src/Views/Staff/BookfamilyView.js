const controller = require("../../Controller/index");
const bookfamily = new controller.BookfamilyController();
const staf = new controller.StaffController();

const component = require("../../components/uploadImage");
const upLoadimage = new component();

module.exports = {
  CreateBookfamily(req, res) {
    staf.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        bookfamily.getBookfimaly(req.body.employee_Id).then((ch) => {
          if (ch.status != 200) {
            bookfamily
              .createFamily({
                employee_Id: req.body.employee_Id,
                bf_nohome: req.body.bf_nohome,
                bf_unit: req.body.bf_unit,
                bf_approvedDate: req.body.bf_approvedDate,
                bf_expiredDate: req.body.bf_expiredDate,
                bf_location: req.body.bf_location,
                bf_image: "default_iamge.jpg",
              })
              .then((rs) => {
                res.status(rs.status).send({
                  ...rs,
                });
              });
            return;
          }
          res.status(ch.status).send({
            ...ch,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  UpdateBookfamily_Image(req, res) {
    upLoadimage.path = "./public/images/bookfamily";
    upLoadimage.uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        bookfamily
          .modifyImage_family(req.params.Id, upLoadimage.pathImage)
          .then((result) => {
            if (result.status == 404) {
              upLoadimage.getUnlink(
                "./public/images/bookfamily/" + upLoadimage.pathImage
              );
            }
            res.status(result.status).send({
              ...result,
            });
          });
      }
    });
  },
  UpdateBookfamily(req, res) {
    staf.selectEmployee(req.body.employee_Id).then((result) => {
      if (result.status == 200) {
        bookfamily.updateFamily(req.params.Id, req.body).then((rs) => {
          res.status(rs.status).send({
            ...rs,
          });
        });
        return;
      }
      res.status(result.status).send({
        ...result,
      });
    });
  },
  RemoveBookfamily(req, res) {
    bookfamily.removeBoofamily(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetBookfamily(req, res) {
    bookfamily.getBookfimaly(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
