module.exports = (sequelize, DataTypes) => {
  const IndentityCard = sequelize.define(
    "IndentityCard",
    {
      ind_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      ind_nocard: DataTypes.STRING(8),
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
