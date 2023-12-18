const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Car.init({
    model: DataTypes.STRING,
    price: DataTypes.FLOAT,
    year: DataTypes.INTEGER,
    color: DataTypes.STRING,
    engineType: DataTypes.ENUM,
    transmission: DataTypes.ENUM,
    range: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'car',
  });
  return Car;
};
