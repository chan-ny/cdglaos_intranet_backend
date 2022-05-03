module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    cus_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_Id: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    cus_name: DataTypes.STRING(60),
    cus_phone: DataTypes.STRING(12),
    cus_tell: DataTypes.STRING(12),
    cus_status: DataTypes.STRING(15),
  });
  return Customer;
};
