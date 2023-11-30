const { Model, DataTypes } = require("sequelize");

class Evidence extends Model {
  static init(sequelize) {
    super.init(
      {
        filename: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "Evidence",
        underscored: false,
        tableName: "evidences",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Occurrence, {
      foreignKey: "occurrence_id",
      as: "occurrence",
    });
  }
}

module.exports = Evidence;
