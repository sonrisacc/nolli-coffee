/* eslint no-console:0 */
module.exports = function BrandSchema(sequelize, DataTypes) {
  const Brand = sequelize.define(
    'brand',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      brand_name: {
        type: DataTypes.STRING,
        unique: true,
      },
      brand_url: DataTypes.STRING,
    },
    // {
    //   hooks: {
    //     afterCreate: beanBrand => {
    //       console.log('line8', beanBrand.dataValues.id);
    //       return beanBrand.dataValues.id;
    //     },
    //   },
    // },
  );

  Brand.associate = models => {
    Brand.hasMany(models.bean);
  };
  return Brand;
};
