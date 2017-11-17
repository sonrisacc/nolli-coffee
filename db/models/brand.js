module.exports = function BrandSchema(sequelize, DataTypes) {
  const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    brand_name: DataTypes.STRING,
    brand_url: DataTypes.STRING,
  });

  Brand.associate = models => {
    Brand.hasMany(models.bean);
  };
  return Brand;
};
