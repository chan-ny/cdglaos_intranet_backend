module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Compnay", {
    cpn_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    cpn_name: DataTypes.STRING(150),
    cpn_serialNumber: DataTypes.STRING(30),
    cpn_phone: DataTypes.STRING(12),
    cpn_tell: DataTypes.STRING(12),
    cpn_content: DataTypes.TEXT,
    cpn_fromDate: DataTypes.DATE,
    cpn_endDate: DataTypes.DATE,
    cpn_logo: DataTypes.STRING(255),
    cpn_state: DataTypes.STRING(15),
  });
  return Company;
};
