const Bluebird = require("bluebird");
const bcrypt = Bluebird.promisifyAll(require("bcrypt-nodejs"));

function hasPassword(admin, option) {
  const SALT_FACTOR = 8;
  if (!admin.changed("ad_password")) {
    return;
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt) => bcrypt.hashAsync(admin.ad_password, salt, null))
    .then((hash) => {
      admin.setDataValue("ad_password", hash);
    });
}
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      ad_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ad_email: {
        type: DataTypes.STRING(60),
        unique: true,
      },
      ad_password: DataTypes.STRING,
      ad_status: DataTypes.STRING(15),
    },
    {
      hooks: {
        beforeSave: hasPassword
      },
    }
  );
  Admin.prototype.comparePassword = function (password) {
     return bcrypt.compareAsync(password, this.ad_password)
  }
  return Admin;
};
