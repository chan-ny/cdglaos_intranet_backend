module.exports = (sequelize, DataTypes) => {
  const CEOS = sequelize.define(
    "CEO",
    {
      ceo_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ceo_name: DataTypes.STRING(60),
      ceo_phone: DataTypes.STRING(12),
      ceo_tell: DataTypes.STRING(12),
      ceo_image: DataTypes.STRING(255),
    },
    {
      timestamps: false,
    }
  );
  return CEOS;
};
