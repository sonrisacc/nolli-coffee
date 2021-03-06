module.exports = function RegionSchema(sequelize, DataTypes) {
  const Region = sequelize.define('region', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    origin: { type: DataTypes.STRING, unique: true },
    location: DataTypes.STRING,
  });

  Region.associate = models => {
    Region.hasMany(models.bean);
  };
  return Region;
};
