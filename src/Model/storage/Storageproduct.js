module.exports = (sequelize, DataTypes) => {
  const Storageproduct = sequelize.define("Storage_product", {
    sp_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    brands_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    typestoeage_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    typeproduct_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    sp_tiel: DataTypes.STRING(120),
    sp_content: DataTypes.TEXT,
    sp_number: DataTypes.INTEGER(12),
    sp_price: DataTypes.FLOAT,
    sp_status: DataTypes.STRING(15),
  });
  return Storageproduct;
};
