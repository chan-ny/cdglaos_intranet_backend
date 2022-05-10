module.exports = (sequelize, DataTypes) => {
  const TypeLaw = sequelize.define("type_law", {
    tl_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tl_title: DataTypes.STRING(115),
    tl_status: DataTypes.STRING(15),
  });
  return TypeLaw;
};
