exports.RoastPackSchema = (sequelize, DataTypes) => {
  const RoastPack = sequelize.define('roast_pack', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    roast_date: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    img_url: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    package_weight: DataTypes.INTEGER,
  });

  RoastPack.associate = models => {
    RoastPack.hasMany(models.brew_bean);
    RoastPack.belongsTo(models.bean);
    RoastPack.belongsTo(models.user);
  };

  return RoastPack;
};
