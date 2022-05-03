module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      role_Id: {
        type: DataTypes.INTEGER(6),
        primaryKey: true,
        autoIncrement: true,
      },
      role_name: DataTypes.STRING(100),
    },
    { timestamps: false }
  );
  return Role;
};
