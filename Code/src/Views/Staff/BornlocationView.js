const controller = require("../../Controller/index");
const bornlocatin = new controller.BorlocationController();
const staff = new controller.StaffController();
const province = new controller.ProvinceController();
const district = new controller.DistrictController();

module.exports = {
  CreateBL(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((sf) => {
      if (sf.status == 200) {
        province.getProvince(req.body.province_Id).then((pv) => {
          if (pv.status == 200) {
            district.getDistrict(req.body.district_Id).then((dt) => {
              if (dt.status == 200) {
                bornlocatin.createBL(req.body).then((bl) => {
                  res.status(bl.status).send({
                    ...bl,
                  });
                });
                return;
              }
              res.status(dt.status).send({
                ...dt,
              });
            });
            return;
          }
          res.status(pv.status).send({
            ...pv,
          });
        });
        return;
      }
      res.status(sf.status).send({
        ...sf,
      });
    });
  },
  UpdateBL(req, res) {
    staff.selectEmployee(req.body.employee_Id).then((sf) => {
      if (sf.status == 200) {
        province.getProvince(req.body.province_Id).then((pv) => {
          if (pv.status == 200) {
            district.getDistrict(req.body.district_Id).then((dt) => {
              if (dt.status == 200) {
                bornlocatin.updateBL(req.params.Id, req.body).then((bl) => {
                  res.status(bl.status).send({
                    ...bl,
                  });
                });
                return;
              }
              res.status(dt.status).send({
                ...dt,
              });
            });
            return;
          }
          res.status(pv.status).send({
            ...pv,
          });
        });
        return;
      }
      res.status(sf.status).send({
        ...sf,
      });
    });
  },
  RemoveBL(req, res) {
    bornlocatin.removeBL(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
  GetBL(req, res) {
    bornlocatin.getBL(req.body.employee_Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
