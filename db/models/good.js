const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Good extends Model {
    static associate({ Category, User }) {
      this.hasMany(Category, {
        foreignKey: 'categoryId',
      });
      this.belongsToMany(User, {
        through: 'Order',
        foreignKey: 'user_id',
      });
    }
  }
  Good.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Good',
    }
  );
  return Good;
};
