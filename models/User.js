module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a User from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our User is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    email: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a User from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our User is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    password: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a User from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our User is between 1 and 140 characters
      validate: {
        len: [6, 140]
      }
    }
  });
  return User;
};
