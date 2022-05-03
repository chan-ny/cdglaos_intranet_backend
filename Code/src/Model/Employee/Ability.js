module.exports = (sequelize, DataTypes) => {
  const Ability = sequelize.define(
    "Ability",
    {
      at_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      at_language: DataTypes.STRING(150),
      at_speciafic: DataTypes.TEXT,
      at_detail: DataTypes.TEXT,
    },
    {
      timestamps: false,
    }
  );
  return Ability;
};
