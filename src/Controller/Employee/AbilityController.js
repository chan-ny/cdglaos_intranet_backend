const { Ability } = require("../../Model");

module.exports = {
  async CreateAbility(req, res) {
    await Ability.create(req.body)
      .then((result) => {
        res.status(200).send({
          msg: "Create Ability for employee is success",
          rs: result,
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
  async UpdateAbility(req, res) {
    const abilty = await Ability.findByPk(req.params.Id);
    if (abilty) {
      abilty.update(req.body).then((result) => {
        res.status(201).send({
          msg: "Update Ability for Employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "The Ability Id is not found",
      });
    }
  },
  async RemoveAbility(req, res) {
    const ability = await Ability.findByPk(req.params.Id);
    if (ability) {
      ability.destroy().then((result) => {
        res.status(200).send({
          msg: "Delete ability of employee is success",
          rs: result,
        });
      });
    } else {
      res.status(500).send({
        msg: "Ability Id is not found",
      });
    }
  },
  async AllAbility(req, res) {
    const ability = await Ability.findAll({
      where: {
        employee_Id: req.body.employee_Id,
      },
    });
    if (ability.length != 0) {
      res.status(200).send({
        msg: "All fine Ability of employee",
        count: ability.length,
        rs: ability,
      });
    } else {
      res.status(404).send({
        msg: "Experience Id is not found",
      });
    }
  },
};
