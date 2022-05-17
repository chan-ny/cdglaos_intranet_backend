const { Company } = require("../Model");
const { getPaginationData, getPagination } = require("../Helper/Pagination");
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
          msg: "Create Company is success",
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
          msg: "Update Company is success",
        });
      });
    } else {
      return (this.msg = {
        status: 404,
        msg: "The Company Id is not found",
      });
    }
    return this.msg;
  }
  //disable
  async disableCompany(Id) {
    const company = await Company.findByPk(Id);
    if (company) {
      await company
        .update({
          cpn_state: "inactive",
        })
        .then(() => {
          return (this.msg = {
            status: 200,
            msg: "Disable company is success",
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
        msg: "The company Id is notfound",
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
            msg: "Renew company is success",
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
        msg: "The company Id is notfound",
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
        msg: "The Compnay Id is notfound",
      });
    }
  }
  async removeCompany(Id) {
    const company = await Company.findByPk(Id);
    if (company) {
      company
        .destroy()
        .then((result) => {
          return (this.msg = {
            status: 200,
            rs: result,
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
        msg: "The Compnay Id is notfound",
      });
    }
    return this.msg;
  }
  // all
  async allCompany(page, size) {
    const { limit, offset } = getPagination(page, size);
    await Company.findAll({
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
