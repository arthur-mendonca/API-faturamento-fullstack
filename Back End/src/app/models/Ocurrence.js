const { Model, DataTypes } = require("sequelize");

class Occurrence extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        origin: DataTypes.STRING,
        date: DataTypes.DATE,
        description: DataTypes.TEXT,
        status: DataTypes.ENUM("Em investigação", "Finalizado"),
      },
      {
        sequelize,
        modelName: "Occurrence",
        tableName: "occurrences",
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
  static associate(models) {
    this.hasMany(models.Analysis, {
      foreignKey: "occurrence_id",
      as: "analysis",
    });
  }
  static associate(models) {
    this.hasMany(models.CorrectiveAction, {
      foreignKey: "occurrence_id",
      as: "corrective_action",
    });
  }
}

module.exports = Occurrence;
