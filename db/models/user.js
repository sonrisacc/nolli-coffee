exports.UserSchema = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    google_id: DataTypes.STRING,
    google_token: DataTypes.STRING,
    avatar: DataTypes.STRING,
    access_token: DataTypes.STRING,
  });

  User.associate = models => {
    User.hasMany(models.brew_bean);
    User.hasMany(models.roast_pack);
    User.belongsToMany(models.bean, {
      through: {
        model: models.bean_user,
      },
    });
  };
  return User;
};
