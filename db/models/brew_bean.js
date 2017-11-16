exports.BrewBeanSchema = (sequelize, DataTypes) => {
  const BrewBean = sequelize.define('brew_bean', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    brew_date: DataTypes.STRING,
    brew_duration: DataTypes.INTEGER,
    water_temp: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    water_weight: DataTypes.INTEGER,
    bean_weight: DataTypes.INTEGER,
    grindFineness: DataTypes.STRING,
    note: DataTypes.STRING,
  });

  BrewBean.associate = models => {
    BrewBean.belongsTo(models.bean);
  };

  return BrewBean;
};
