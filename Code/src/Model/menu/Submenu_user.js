module.exports = (sequelize, DataTypes) => {
  const SubmenuUser = sequelize.define(
    "SubMenuUser",
    {
      smu_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      submenu_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      user_Id: {
        type: DataTypes.INTEGER(6),
        allowNull: false,
      },
      all: DataTypes.BOOLEAN,
      view: DataTypes.BOOLEAN,
      insert: DataTypes.BOOLEAN,
      update: DataTypes.BOOLEAN,
      delete: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
    }
  );
  return SubmenuUser;
};
