'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Blog.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    metaSeo: DataTypes.STRING,
    content: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    desc: DataTypes.TEXT,
    createdBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};