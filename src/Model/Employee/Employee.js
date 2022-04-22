module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    emp_Id: {
      type: DataTypes.INTEGER(6),
      primaryKey: true,
      autoIncrement: true,
    },
    user_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    position_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    gender_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    province_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    district_Id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
    },
    emp_name: DataTypes.STRING(60),
    emp_lastname: DataTypes.STRING(60),
    emp_engname: DataTypes.STRING(100),
    emp_birstday: DataTypes.DATE,
    emp_age: DataTypes.INTEGER(6),
    emp_race: DataTypes.STRING(60),
    emp_nationality: DataTypes.STRING(120),
    emp_religoin: DataTypes.STRING(120),
    emp_phone: DataTypes.STRING(12),
    emp_tell: DataTypes.STRING(12),
    emp_image: DataTypes.STRING(255),
    emp_fimalyMember: DataTypes.INTEGER(6),
    emp_character: DataTypes.TEXT,
    emp_heigh: DataTypes.STRING(6),
    emp_weight: DataTypes.STRING(6),
    emp_manMember: DataTypes.INTEGER(6),
    emp_womenMember: DataTypes.INTEGER(6),
    emp_childrenLevel: DataTypes.STRING(4),
    emp_status: DataTypes.STRING(15),
  });
  return Employee;
};
