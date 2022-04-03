const { Experience } = require("../../Model");

module.exports = {
  async CreateExperience(req, res) {
    await Experience.create(req.body)
      .then((result) => {
        res.status(200).send({
          msg: "Create Experience for employee is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  async UpdateExperience(req, res) {
    const experience = await Experience.findByPk(req.params.Id);
    if (experience) {
      experience.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Experience for Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "The Experience Id is not found",
      });
    }
  },
  async RemoveExperience(req, res) {
    const experience = await Experience.findByPk(req.params.Id);
    if (experience) {
      experience.destroy().then((result) => {
        res.status(200).send({
          msg: "Delete Experience of employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "Experience Id is not found",
      });
    }
  },
  async AllExperience(req, res) {
    const experience = await Experience.findAll({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (experience.length != 0) {
      res.status(200).send({
        msg: "All fine Experience of employee",
        count: experience.length,
        rs: experience,
      });
    } else {
      res.status(404).send({
        msg: "Experience Id is not found",
      });
    }
  },
};
