module.exports = (sequelize, DataTypes) => {
  const Approved_training = sequelize.define(
    "Approved_Training",
    {
      appt_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hr_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      training_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      approved_on: DataTypes.STRING(60),
    },
    {
      updatedAt: false,
    }
  );
  return Approved_training;
};
