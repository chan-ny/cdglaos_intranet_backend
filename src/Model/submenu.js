module.exports = (sequelize, DataTypes) => {
  const Submenu = sequelize.define(
    "submenu",
    {
      smId: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: false,
      },
      menu_Id: {
        type: DataTypes.INTEGER(6),
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
