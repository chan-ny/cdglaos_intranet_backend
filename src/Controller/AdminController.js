const { Admin } = require("../Model");
const { jwtCreate } = require("../Helper/Jwt");
module.exports = {
  // Register Admin
  async RegisterAdmin(req, res) {
    try {
      const admin = await Admin.create(req.body);
      if (admin) {
        res.status(200).send({
          msg: "Create new Admin the Complete",
          result: admin,
        });
      }
    } catch (error) {
      res.status(501).send({
        msg: error.parent.sqlMessage,
      });
    }
  },
  //login Admin
  async LoginAdmin(req, res) {
    try {
      const { ad_email, ad_password } = req.body;
      const admin = await Admin.findOne({
        where: {
          ad_email: ad_email,
        },
      });
      if (!admin) {
        return res.status(404).send({
          err: "Email not found it",
        });
      }
      const isPassword = await admin.comparePassword(ad_password);
      if (!isPassword) {
        return res.status(404).send({
          err: "Password incorrent",
        });
      }
      const adminJSON = admin.toJSON();
      res.status(200).send({
        admin: adminJSON,
        token: jwtCreate(adminJSON), // create token on JWT
      });
    } catch (error) {
      res.status(501).send({
        msg: error,
      });
    }
  },
  // index Admin
  async index(req, res) {
    try {
      const admin = await Admin.findAll();
      res.send(admin);
    } catch (error) {
      res.status(501).send({
        msg: error,
      });
    }
  },
};
