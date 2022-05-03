module.exports = (sequelize, DataTypes) => {
  const Submenu = sequelize.define(
    "SubMenu",
    {
      smId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
      },
      menu_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sm_name: DataTypes.STRING(100),
    },
    {
      timestamps: false,
    }
  );
  return Submenu;
};
