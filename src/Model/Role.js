module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      r_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      r_name: DataTypes.STRING(100),
    },
    { timestamps: false }
  );
  return Role;
};
