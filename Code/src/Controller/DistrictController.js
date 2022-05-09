const { District, sequelize } = require("../Model");
const { QueryTypes } = require("sequelize");
const Province_C = require("./ProvinceController");
const provice = new Province_C();
class Districts {
  province_id;
  msg;
  //GetProvince
  async GetProvinces(Id) {
    //getProduct
    await provice.getProvince(Id).then((result) => {
      if (result.status == 200) {
        this.province_Id = result.rs.dataValues.pv_Id;
      } else {
        return (this.msg = {
          ...result,
        });
      }
    });
    return this.msg;
  }
  //create
  async createDistrict(value) {
    //area province
    await this.GetProvinces(value.province_Id);
    //area district
    if (this.province_Id != undefined) {
      await District.create(value)
        .then((result) => {
          return (this.msg = {
            status: 200,
            msg: "Create districtn is success",
            rs: result,
          });
        })
        .catch(() => {
          return (this.msg = {
            status: 501,
            msg: "Can`t create district ",
          });
        });
    }
    this.province_Id = undefined;
    return this.msg;
  }
  //update
  async updateDistrict(value) {
    await this.GetProvinces(value.province_Id);
    if (this.province_Id != undefined) {
      const district = await District.findByPk(value.dt_Id);
      if (district) {
        await district
          .update(value)
          .then((result) => {
            return (this.msg = {
              status: 200,
              msg: "update The District is success",
              rs: result,
            });
          })
          .catch(() => {
            return (this.msg = {
              status: 501,
              msg: "Can`t Update district",
            });
          });
      } else {
        return (this.msg = {
          status: 404,
          msg: "The District Id is notfound",
        });
      }
    }
    this.province_Id = undefined;
    return this.msg;
  }
  //all
  async allDistrict() {
    await sequelize
      .query(
        "select Districts.dt_Id,Provinces.pv_laoName,Provinces.pv_engName,Districts.dt_laoName,Districts.dt_engName,Districts.dt_engName,Districts.createdAt,Districts.updatedAt from Districts " +
          " inner join Provinces on Districts.province_Id = Provinces.pv_Id " +
          " order by Districts.dt_Id DESC",
        { type: QueryTypes.SELECT }
      )
      .then((result) => {
        if (result) {
          return (this.msg = {
            status: 200,
            counts: result.length,
            rs: result,
          });
        }
      })
      .catch((err) => {
        return (this.msg = {
          status: 501,
          msg: err,
        });
      });
    return this.msg;
  }
  async getDistrict(Id) {
    await this.GetProvinces(Id);
    if (this.province_Id != undefined) {
      await sequelize
        .query(
          "select Districts.dt_Id,Provinces.pv_laoName,Provinces.pv_engName,Districts.dt_laoName,Districts.dt_engName,Districts.dt_engName,Districts.createdAt,Districts.updatedAt from Districts " +
            " inner join Provinces on Districts.province_Id = Provinces.pv_Id " +
            " where province_Id = " +
            this.province_Id +
            " order by Districts.dt_Id DESC",
          { type: QueryTypes.SELECT }
        )
        .then((result) => {
          if (result.length != 0) {
            return (this.msg = {
              status: 200,
              msg: "Find District of Province is Success",
              count: result.length,
              rs: result,
            });
          } else {
            return (this.msg = {
              status: 404,
              msg: "Values District is Emplty ",
            });
          }
        })
        .catch((err) => {
          return (this.msg = {
            status: 501,
            msg: err,
          });
        });
    }
    this.province_Id = undefined;
    return this.msg;
  }

  async SelectDistrict(Id) {
    const district = await District.findByPk(Id);
    if (district) {
      return (this.msg = {
        status: 200,
        rs: district,
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The District Id is notfound",
      });
    }
  }
}

module.exports = Districts;
