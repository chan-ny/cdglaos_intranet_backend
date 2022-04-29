const { Company } = require("../Model");

class Companys {
  msg;
  //create
  async createCompany(value, path) {
    await Company.create({
      cpn_name: value.cpn_name,
      cpn_serialNumber: value.cpn_serialNumber,
      cpn_phone: value.cpn_phone,
      cpn_tell: value.cpn_tell,
      cpn_content: value.cpn_content,
      cpn_fromDate: value.cpn_fromDate,
      cpn_endDate: value.cpn_endDate,
      cpn_logo: path,
      cpn_state: value.cpn_state,
    }).then((result) => {
      return (this.msg = {
        status: 200,
        msg: "Create Company is success",
        rs: result,
      });
    });
    return this.msg;
  }
}

module.exports = Companys;
