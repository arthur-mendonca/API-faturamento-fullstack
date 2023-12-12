// User model
const User = sequelize.define("User", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

const Occurrence = sequelize.define("Occurrence", {
  name: Sequelize.STRING,
  origin: Sequelize.STRING,
  date: Sequelize.DATE,
  status: Sequelize.STRING,

  causeAnalysis: Sequelize.TEXT,
  correctiveActionName: Sequelize.STRING,
});

const Evidence = sequelize.define("Evidence", {
  occurrenceId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Occurrences",
      key: "id",
    },
  },
  filename: Sequelize.STRING,
});

const Analysis = sequelize.define("Analysis", {
  occurrenceId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Occurrences",
      key: "id",
    },
  },
  description: Sequelize.TEXT,
  filename: Sequelize.STRING,
});

const CorrectiveAction = sequelize.define("CorrectiveAction", {
  occurrenceId: {
    type: Sequelize.INTEGER,
    references: {
      model: "Occurrences",
      key: "id",
    },
  },
  name: Sequelize.STRING,
});

User.hasMany(Occurrence);
Occurrence.belongsTo(User);
Occurrence.hasMany(Evidence);
Occurrence.hasOne(Analysis);
Occurrence.hasMany(CorrectiveAction, { as: "correctiveActions" });
CorrectiveAction.belongsTo(Occurrence);
