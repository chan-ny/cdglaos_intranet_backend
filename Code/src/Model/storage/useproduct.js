module.exports = (sequlize, DataTypes) => {
  const Useproduct = sequlize.define(
    "Use_Product",
    {
      up_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employee_Id: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      storageproduct_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hr_Id: {
        type: DataTypes.INTEGER,
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
