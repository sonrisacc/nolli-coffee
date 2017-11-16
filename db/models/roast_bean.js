exports.RoastBeanSchema = (sequelize, DataTypes) => {
  const RoastBean = sequelize.define('roast_bean', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    roast_date: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    img_url: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    package_weight: DataTypes.INTEGER,
  });

  RoastBean.associate = models => {
    RoastBean.belongsTo(models.bean);
  };

  return RoastBean;
};
