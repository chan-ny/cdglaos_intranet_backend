module.exports = (sequelize, DataTypes) => {
  const Typeassets = sequelize.define("Type_Assets", {
    ta_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ta_name: DataTypes.STRING(120),
    ta_detail: DataTypes.TEXT,
    ta_status: DataTypes.STRING(15),
  });
  return Typeassets;
};
