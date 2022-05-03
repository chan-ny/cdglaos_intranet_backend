module.exports = (sequelize, DataTypes) => {
  const Typestorage = sequelize.define("Type_Storage", {
    tsr_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tsr_name: DataTypes.STRING(120),
    tsr_detail: DataTypes.TEXT,
    tsr_status: DataTypes.STRING(15),
  });
  return Typestorage;
};
