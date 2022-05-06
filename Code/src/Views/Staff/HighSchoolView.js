const controller = require("../../Controller/index");
const highschool = new controller.HighSchoolController();

module.exports = {
  CreateHS(req, res) {
    highschool.createHS();
  },
};
