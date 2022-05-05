const controller = require("../../Controller/index");
const staff = new controller.StaffController();
const users = new controller.Usercontroller();
const company = new controller.CompanyController();
const gender = new controller.GendersContriller();
const province = new controller.ProvinceController();
const dictrict = new controller.DistrictController();
const position = new controller.PositionController();
const { autoIncrementId } = require("../../components/autoIncrement");

const uploadImage = require("../../components/uploadImage");
const up = new uploadImage();

let autoId = "";

module.exports = {
  //create staff
  async CreateEmployee(req, res) {
    ///fine max Id of staff
    await staff.MaxID().then((max) => {
      autoId = max.rs.dataValues.emp_Id;
    });
    let fk = {
      user_Id: "",
      position_Id: "",
      gender_Id: "",
      province_Id: "",
      district_Id: "",
      company_Id: "",
    };
    let body = {
      emp_Id: autoIncrementId("ST", autoId),
      emp_name: req.body.emp_name,
      emp_lastname: req.body.emp_lastname,
      emp_engname: req.body.emp_engname,
      emp_birstday: req.body.emp_birstday,
      emp_age: req.body.emp_age,
      emp_race: req.body.emp_race,
      emp_nationality: req.body.emp_nationality,
      emp_religoin: req.body.emp_religoin,
      emp_phone: req.body.emp_phone,
      emp_tell: req.body.emp_tell,
      emp_image: "default_iamge.jpg",
      emp_fimalyMember: req.body.emp_fimalyMember,
      emp_character: req.body.emp_character,
      emp_heigh: req.body.emp_heigh,
      emp_weight: req.body.emp_weight,
      emp_manMember: req.body.emp_manMember,
      emp_womenMember: req.body.emp_womenMember,
      emp_childrenLevel: req.body.emp_childrenLevel,
      emp_status: req.body.emp_status,
    };
    company.getCompany(req.body.company_Id).then((rspcn) => {
      if (rspcn.status == 200) {
        gender.GetGender(req.body.gender_Id).then((rsgd) => {
          if (rsgd.status == 200) {
            province.getProvince(req.body.province_Id).then((rspv) => {
              if (rspv.status == 200) {
                dictrict.SelectDistrict(req.body.district_Id).then((rsdt) => {
                  if (rsdt.status == 200) {
                    position.getPosition(req.body.position_Id).then((rspt) => {
                      if (rspt.status == 200) {
                        users.registerUser(req.body).then((result) => {
                          if (result.status == 200) {
                            fk.company_Id = rspcn.rs.dataValues.cpn_Id;
                            fk.gender_Id = rsgd.rs.dataValues.gd_Id;
                            fk.province_Id = rspv.rs.dataValues.pv_Id;
                            fk.district_Id = rsdt.rs.dataValues.dt_Id;
                            fk.position_Id = rspt.rs.dataValues.p_Id;
                            fk.user_Id = result.rs.dataValues.uer_Id;
                            let object = { ...fk, ...body };
                            staff.createEmployee(object).then((result) => {
                              res.status(result.status).send({
                                ...result,
                              });
                            });
                            return;
                          }
                          res.status(result.status).send({
                            ...result,
                          });
                        });
                        return;
                      }
                      res.status(rspt.status).send({
                        ...rspt,
                      });
                    });
                    return;
                  }
                  res.status(rsdt.status).send({
                    ...rsdt,
                  });
                });
                return;
              }
              res.status(rspv.status).send({
                ...rspv,
              });
            });
            return;
          }
          res.status(rsgd.status).send({
            ...rsgd,
          });
        });
        return;
      }
      res.status(rspcn.status).send({
        ...rspcn,
      });
    });
  },
  // modify image
  ModifyImage(req, res) {
    up.path = "./public/images/employee";
    up.uploadSingle(req, res, (err) => {
      if (err) {
        res.end("Error Upload file image");
      } else {
        staff.modifyEmployee(req.params.Id, up.pathImage).then((rs) => {
          if (rs.status == 404) {
            up.getUnlink("./public/images/employee/" + up.pathImage);
          }
          res.status(rs.status).send({
            ...rs,
          });
        });
      }
    });
  },
  // change image
  async ChangeImage(req, res) {
    staff.selectEmployee(req.params.Id).then((result) => {
      if (result.status == 404) {
        res.status(result.status).send({
          ...result,
        });
        return;
      }
      up.getUnlink(
        "./public/images/employee/" + result.rs.dataValues.emp_image
      );
      up.path = "./public/images/employee";
      up.uploadSingle(req, res, (err) => {
        if (err) {
          res.end("Error Upload file image");
        } else {
          staff
            .modifyEmployee(result.rs.dataValues.emp_Id, up.pathImage)
            .then((result) => {
              res.status(result.status).send({
                ...result,
              });
            });
        }
      });
    });
  },

  //update
  UpdateEmployee(req, res) {
    let fk = {
      position_Id: "",
      gender_Id: "",
      province_Id: "",
      district_Id: "",
      company_Id: "",
    };
    let body = {
      emp_name: req.body.emp_name,
      emp_lastname: req.body.emp_lastname,
      emp_engname: req.body.emp_engname,
      emp_birstday: req.body.emp_birstday,
      emp_age: req.body.emp_age,
      emp_race: req.body.emp_race,
      emp_nationality: req.body.emp_nationality,
      emp_religoin: req.body.emp_religoin,
      emp_phone: req.body.emp_phone,
      emp_tell: req.body.emp_tell,
      emp_fimalyMember: req.body.emp_fimalyMember,
      emp_character: req.body.emp_character,
      emp_heigh: req.body.emp_heigh,
      emp_weight: req.body.emp_weight,
      emp_manMember: req.body.emp_manMember,
      emp_womenMember: req.body.emp_womenMember,
      emp_childrenLevel: req.body.emp_childrenLevel,
    };
    company.getCompany(req.body.company_Id).then((rspcn) => {
      if (rspcn.status == 200) {
        gender.GetGender(req.body.gender_Id).then((rsgd) => {
          if (rsgd.status == 200) {
            province.getProvince(req.body.province_Id).then((rspv) => {
              if (rspv.status == 200) {
                dictrict.SelectDistrict(req.body.district_Id).then((rsdt) => {
                  if (rsdt.status == 200) {
                    position.getPosition(req.body.position_Id).then((rspt) => {
                      if (rspt.status == 200) {
                        fk.company_Id = rspcn.rs.dataValues.cpn_Id;
                        fk.gender_Id = rsgd.rs.dataValues.gd_Id;
                        fk.province_Id = rspv.rs.dataValues.pv_Id;
                        fk.district_Id = rsdt.rs.dataValues.dt_Id;
                        fk.position_Id = rspt.rs.dataValues.p_Id;
                        let object = { ...fk, ...body };
                        staff
                          .updateEmployee(req.params.Id, object)
                          .then((result) => {
                            res.status(result.status).send({
                              ...result,
                            });
                          });
                        return;
                      }
                      res.status(rspt.status).send({
                        ...rspt,
                      });
                    });
                    return;
                  }
                  res.status(rsdt.status).send({
                    ...rsdt,
                  });
                });
                return;
              }
              res.status(rspv.status).send({
                ...rspv,
              });
            });
            return;
          }
          res.status(rsgd.status).send({
            ...rsgd,
          });
        });
        return;
      }
      res.status(rspcn.status).send({
        ...rspcn,
      });
    });
  },

  //inactive
  InactiveEmployee(req, res) {
    staff.inactiveEmployee(req.params.Id).then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },

  //all
  AllEmployee(req, res) {
    staff.allEmployee().then((result) => {
      res.status(result.status).send({
        ...result,
      });
    });
  },
};
