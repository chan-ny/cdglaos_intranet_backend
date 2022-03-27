module.exports = (sequelize, DataTypes) => {
  const BookFimaly = sequelize.define(
    "BookFimaly",
    {
      bf_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bf_nohome: DataTypes.STRING(8),
      bf_unit: DataTypes.STRING(8),
      bf_approvedDate: DataTypes.DATE,
      bf_expiredDate: DataTypes.DATE,
      bf_location: DataTypes.STRING(120),
      bf_image: DataTypes.JSON,
    },
    {
      timestamps: false,
    }
  );
  return BookFimaly;
};
