module.exports = (sequelize, DataTypes) => {
  const HusbandWife = sequelize.define(
    "HusbandWife",
    {
      hw_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hw_name: DataTypes.STRING(120),
      hw_worklocation: DataTypes.TEXT,
      hw_position: DataTypes.STRING(120),
      hw_numberChild: DataTypes.INTEGER(6),
    },
    {
      timestamps: false,
    }
  );
  return HusbandWife;
};
