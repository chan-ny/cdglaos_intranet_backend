module.exports = (sequlize, DataTypes) => {
  const Useproduct = sequlize.define(
    "Use_Product",
    {
      up_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      storageproduct_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      hr_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      up_qty: DataTypes.INTEGER(12),
      up_statue: DataTypes.STRING(15),
    },
    {
      updatedAt: false,
    }
  );
  return Useproduct;
};
