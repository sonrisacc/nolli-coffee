exports.BeanUserSchema = (sequelize, DataTypes) => {
  const BeanUser = sequelize.define('bean_user', {
    starred: DataTypes.BOOLEAN,
    purchased: DataTypes.BOOLEAN,
    watched: DataTypes.BOOLEAN,
  });

  return BeanUser;
};
