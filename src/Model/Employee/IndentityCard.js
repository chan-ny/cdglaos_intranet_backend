module.exports = (sequelize, DataTypes) => {
  const IndentityCard = sequelize.define(
    "IndentityCard",
    {
      ind_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ind_nocard: DataTypes.INTEGER(8),
      ind_approvedDate: DataTypes.DATE,
      ind_expiredDate: DataTypes.DATE,
      ind_location: DataTypes.STRING(120),
      ind_image: DataTypes.STRING(255),
    },
    {
      timestamps: false,
    }
  );
  return IndentityCard;
};
