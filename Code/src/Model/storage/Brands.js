module.exports = (sequlize, DataTypes) => {
  const Brands = sequlize.define("Brand", {
    bId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    b_name: DataTypes.STRING(120),
    b_status: DataTypes.STRING(15),
  });
  return Brands;
};
