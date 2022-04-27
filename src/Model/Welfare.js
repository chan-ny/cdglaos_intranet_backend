module.exports = (sequelize, DataTypes) => {
  const Welfare = sequelize.define("Welfare", {
    wf_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    hr_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    wf_title: DataTypes.STRING(200),
    wf_content: DataTypes.TEXT,
    wf_status: DataTypes.STRING(15),
  });
  return Welfare;
};
