module.exports = (sequelize, DataTypes) => {
  const SubmenuUser = sequelize.define(
    "SubMenuUser",
    {
      smu_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      submenu_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_Id: {
        type: DataTypes.INTEGER,
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
