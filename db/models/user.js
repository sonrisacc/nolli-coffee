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
    User.hasMany(models.roast_bean);
    User.belongsToMany(models.bean, {
      through: {
        model: models.bean_user,
      },
    });
  };

  return User;
};

/*
Post.belongsToMany(Tag, {
  through: {
    model: ItemTag,
    unique: false,
    scope: {
      taggable: 'post'
    }
  },
  foreignKey: 'taggable_id',
  constraints: false
});
Tag.belongsToMany(Post, {
  through: {
    model: ItemTag,
    unique: false
  },
  foreignKey: 'tag_id',
  constraints: false
});
*/
