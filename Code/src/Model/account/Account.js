module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("account", {
    ac_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    typeaccount_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ac_title: DataTypes.STRING(200),
    ac_content: DataTypes.TEXT,
    ac_image: DataTypes.STRING(255),
    ac_status: DataTypes.STRING(15),
  });
  return Account;
};
