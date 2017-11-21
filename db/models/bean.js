module.exports = function BeanSchema(sequelize, DataTypes) {
  const Bean = sequelize.define(
    'bean',
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      rating: DataTypes.STRING,
      bean_name: DataTypes.STRING,
      review_date: DataTypes.STRING,
      price: DataTypes.STRING,
      detail_url: DataTypes.STRING,
      logo_url: DataTypes.STRING,
      roast: DataTypes.STRING,
      agtron: DataTypes.STRING,
      aroma: DataTypes.STRING,
      acidity: DataTypes.STRING,
      withMilk: DataTypes.STRING,
    },
    // {
    //   hooks: {
    //     beforeCreate: beanBrand => {
    //       console.log('line8', beanBrand.dataValues.id);
    //       return beanBrand.dataValues.id;
    //     },
    //   },
    // },
  );

  Bean.associate = models => {
    Bean.hasMany(models.roast_pack);
    Bean.belongsTo(models.brand);
    Bean.belongsTo(models.region);
    Bean.belongsToMany(models.user, {
      through: {
        model: models.bean_user,
      },
    });
  };

  return Bean;
};
