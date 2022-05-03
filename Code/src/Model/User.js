const Bluebird = require("bluebird");
const bcrypt = Bluebird.promisifyAll(require("bcrypt-nodejs"));

function hasPassword(User, option) {
  const SALT_FACTOR = 8;
  if (!User.changed("upassowrd")) {
    return;
  }
  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt) => bcrypt.hashAsync(User.upassowrd, salt, null))
    .then((hash) => {
      User.setDataValue("upassowrd", hash);
    });
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uer_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      role_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uemail: {
        type: DataTypes.STRING(60),
        unique: true,
      },
      upassowrd: DataTypes.STRING,
      ustatus: DataTypes.STRING(15),
    },
    {
      hooks: {
        beforeSave: hasPassword,
      },
    }
  );
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.upassowrd);
  };
  return User;
};
