module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      mnId: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      menu_name: DataTypes.STRING(100),
    },
    {
      timestamps: false,
    }
  );
  return Menu;
};
