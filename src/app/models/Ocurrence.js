const { Model, DataTypes } = require("sequelize");

class Occurrence extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        origin: DataTypes.STRING,
        date: DataTypes.DATE,
        status: DataTypes.ENUM("em investigação", "finalizado"),
      },
      {
        sequelize,
        modelName: "Occurrence",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
  static associate(models) {
    this.hasMany(models.Evidence, {
      foreignKey: "occurrence_id",
      as: "evidences",
    });
  }
}

module.exports = Occurrence;
