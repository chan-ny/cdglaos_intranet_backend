const { Company, CEOS } = require("../Model");
const { getPaginationData, getPagination } = require("../Helper/Pagination");
const uploadImage = require("../components/uploadImage");
const up = new uploadImage();
class Companys {
  msg;
  //create
  async createCompany(value) {
    await Company.create({
      cpn_name: value.cpn_name,
      cpn_serialNumber: value.cpn_serialNumber,
      cpn_phone: value.cpn_phone,
      cpn_tell: value.cpn_tell,
      cpn_content: value.cpn_content,
      cpn_fromDate: value.cpn_fromDate,
      cpn_endDate: value.cpn_endDate,
      cpn_logo: "default_iamge.jpg",
      cpn_state: value.cpn_state,
    })
      .then((result) => {
        return (this.msg = {
          status: 200,
          msgen: "Create Company is success",
          msgla: "ສ້າງຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
          rs: result,
        });
      })
      .catch((err) => {
        return (this.msg = {
          status: 501,
          msg: err,
        });
      });
    return this.msg;
  }
  //update
  async updateCompanyText(Id, value) {
    const company = await Company.findByPk(Id);
    if (company) {
      await company.update(value).then(() => {
        return (this.msg = {
          status: 200,
          msgen: "Update Company is success",
          msgla: "ແກ້ໄຂຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
        });
      });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The company Id is notfound",
        msgla: "ລະຫັດທີ່ຄົ້ນຫາບໍ່ມີໃນລະບົບ",
      });
    }
    return this.msg;
  }
  //disable
  async disableCompany(Id, state) {
    const company = await Company.findByPk(Id);
    if (company) {
      await company
        .update({
          cpn_state: state,
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msgen: "Disable company is success",
            msgla: "ເປີດ/ປີດການໃຊ້ງານ ຂອງບໍລິສັດສຳເລັດແລ້ວ",
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 500,
            msg: err,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The company Id is notfound",
        msgla: "ລະຫັດທີ່ຄົ້ນຫາບໍ່ມີໃນລະບົບ",
      });
    }
    return this.msg;
  }
  //renew
  async renewCompnany(Id, mDateTime) {
    const company = await Company.findByPk(Id);
    if (company) {
      await company
        .update({
          cpn_endDate: mDateTime,
          cpn_state: "active",
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msgen: "Renew company is success",
            msgla: "ຕໍ່ສັນຍາບໍລິສັກສຳເລັດແລ້ວ",
          });
        })
        .catch((err) => {
          return (this.msg = {
            status: 500,
            msg: err,
          });
        });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The company Id is notfound",
        msgla: "ລະຫັດທີ່ຄົ້ນຫາບໍ່ມີໃນລະບົບ",
      });
    }
    return this.msg;
  }
  //get
  async getCompany(Id) {
    const company = await Company.findByPk(Id);
    if (company) {
      return (this.msg = {
        status: 200,
        rs: company,
      });
    } else {
      return (this.msg = {
        status: 404,
        msgen: "The Compnay Id is notfound",
        msgla: "ລະຫັດທີ່ຄົ້ນຫາບໍ່ມີໃນລະບົບ",
      });
    }
  }
  async removeCompany(Id) {
    const company = await Company.findByPk(Id);
    if (company) {
      if (company.cpn_logo != "default_iamge.jpg") {
        await up.getUnlink("./public/images/company/" + company.cpn_logo);
      }
      try {
        await company.destroy();
        return (this.msg = {
          status: 200,
          msge: "Delete Company is success",
          msgla: "ລືບຂໍ້ມູນບໍລິສັດສຳເລັດແລ້ວ",
        });
      } catch (error) {
        return (this.msg = {
          status: 500,
          msgen:
            "Can`t delete fiel. Because Data has Relationship with table other",
          msgla: "ບໍ່ສາມາດລືບຂໍ້ມູນ ເນື່ອງຈາກວ່າຂໍ້ມູນມິຄວາມສຳພັນຢູ່",
        });
      }
    } else {
      return (this.msg = {
        status: 404,
        msge: "The Compnay Id is notfound",
        msgla: "ລະຫັດທີ່ຄົ້ນຫາບໍ່ມີໃນລະບົບ",
      });
    }
    return this.msg;
  }
  // all
  async allCompany(page, size) {
    const { limit, offset } = getPagination(page, size);
    await Company.findAll({
      include: [{ model: CEOS, attributes: ["ceo_Id"] }],
      limit: limit,
      offset: offset,
    })
      .then((result) => {
        const response = getPaginationData(result, page, limit);
        return (this.msg = {
          status: 200,
          counts: result.length,
          rs: response,
        });
      })
      .catch((err) => {
        return (this.msg = {
          status: 500,
          msg: err,
        });
      });
    return this.msg;
  }
}

module.exports = Companys;
