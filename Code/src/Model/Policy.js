module.exports = (sequelize, DataTypes) => {
  const Policy = sequelize.define("Policy", {
    pc_Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pc_title: DataTypes.STRING(200),
    pc_content: DataTypes.TEXT,
    pc_status: DataTypes.STRING(15),
  });
  return Policy;
};
