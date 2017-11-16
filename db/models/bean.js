exports.BeanSchema = (sequelize, DataTypes) => {
  const Bean = sequelize.define('bean', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    bean_name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    review_date: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    logo_url: DataTypes.STRING,
  });

  Bean.associate = models => {
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
