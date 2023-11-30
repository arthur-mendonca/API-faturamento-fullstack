// // User model
// const User = sequelize.define("User", {
//   firstName: Sequelize.STRING,
//   lastName: Sequelize.STRING,
//   email: Sequelize.STRING,
//   password: Sequelize.STRING, // Lembre-se de armazenar senhas criptografadas
// });

// // Occurrence model
// const Occurrence = sequelize.define("Occurrence", {
//   name: Sequelize.STRING,
//   origin: Sequelize.STRING,
//   date: Sequelize.DATE,
//   status: Sequelize.STRING,
//   // A relação de arquivos será tratada separadamente
//   causeAnalysis: Sequelize.TEXT,
//   correctiveActionName: Sequelize.STRING,
// });

// // Evidence model
// const Evidence = sequelize.define("Evidence", {
//   occurrenceId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: "Occurrences",
//       key: "id",
//     },
//   },
//   filename: Sequelize.STRING,
// });

// // Analysis model
// const Analysis = sequelize.define("Analysis", {
//   occurrenceId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: "Occurrences",
//       key: "id",
//     },
//   },
//   description: Sequelize.TEXT,
//   filename: Sequelize.STRING,
// });

// // CorrectiveAction model
// const CorrectiveAction = sequelize.define("CorrectiveAction", {
//   occurrenceId: {
//     type: Sequelize.INTEGER,
//     references: {
//       model: "Occurrences",
//       key: "id",
//     },
//   },
//   name: Sequelize.STRING,
// });

// // Relações
// User.hasMany(Occurrence);
// Occurrence.belongsTo(User);
// Occurrence.hasMany(Evidence);
// Occurrence.hasOne(Analysis);
// Occurrence.hasMany(CorrectiveAction, { as: "correctiveActions" });
// CorrectiveAction.belongsTo(Occurrence);
