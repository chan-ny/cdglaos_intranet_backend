module.exports = (sequelize, DataTypes) => {
  const Storageproduct = sequelize.define("Storage_product", {
    sp_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    brands_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typestoeage_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    typeproduct_Id: {
      type: DataTypes.INTEGER,
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
