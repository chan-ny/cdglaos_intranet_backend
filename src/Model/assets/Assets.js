module.exports = (sequelize, DataTypes) => {
  const Assets = sequelize.define("Assets", {
    aId: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    typeassets_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    hr_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    aTitle: DataTypes.STRING(200),
    aserialnumber: DataTypes.STRING(100),
    aContent: DataTypes.TEXT,
    aImage: DataTypes.STRING(255),
  });
  return Assets;
};
