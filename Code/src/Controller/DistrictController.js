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
            msgen: "Create districtn is success",
            msgla: "ບັນທືກຂໍ້ມູນເມືອງສຳເລັດແລ້ວ",
            rs: result,
          });
        })
        .catch(() => {
          return (this.msg = {
            status: 501,
            msgen: "Can`t create district ",
            msgla: "ບໍ່ສາມາດບັນທຶກຂໍ້ມູນເມືອງ ",
          });
        });
    }
    this.province_Id = undefined;
    return this.msg;
  }
  //update
  async updateDistrict(Id, value) {
    await this.GetProvinces(value.province_Id);
    if (this.province_Id != undefined) {
      const district = await District.findByPk(Id);
      if (district) {
        await district
          .update(value)
          .then(() => {
            return (this.msg = {
              status: 200,
              msgen: "update The District is success",
              msgla: "ແກ້ໄຂຂໍ້ມູນເມືອງສຳເລັດແລ້ວ",
            });
          })
          .catch(() => {
            return (this.msg = {
              status: 501,
              msgen: "Can`t Update district",
              msgla: "ບໍ່ສາມາດແກ້ໄຂຂໍ້ມູນເມືອງ",
            });
          });
      } else {
        return (this.msg = {
          status: 404,
          msgen: "The District Id is notfound",
          msgla: "ຂໍ້ມູນບໍ່ມີໃນລະບົບ",
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
        "select Districts.dt_Id,Provinces.pv_laoName,Provinces.pv_engName,Districts.dt_laoName,Districts.dt_engName,Districts.dt_engName,Districts.dt_status,Districts.createdAt,Districts.updatedAt from Districts " +
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
  //get
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
  //select
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
  //remove
  async districtRemove(Id) {
    const district = await District.findByPk(Id);
    if (district) {
      try {
        await district.destroy();
        return (this.msg = {
          status: 200,
          msgen: "Delete District is success",
          msgla: "ລືບຂໍ້ມູນເມືອງສຳເລັດ",
        });
      } catch (error) {
        return (this.msg = {
          status: 501,
          msgen: "Can`t Delete District",
          msgla: "ບໍ່ສາມາດລືບຂໍ້ມູນເມືອງ",
        });
      }
    } else {
      return (this.msg = {
        status: 404,
        msg: "The District Id is notfound",
      });
    }
  }
}

module.exports = Districts;
