const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../app/models/User");
const Occurrence = require("../app/models/Ocurrence");
const Evidence = require("../app/models/Evidence");

const connection = new Sequelize(dbConfig);

User.init(connection);
Occurrence.init(connection);
Evidence.init(connection);

User.associate(connection.models);
Occurrence.associate(connection.models);
Evidence.associate(connection.models);

module.exports = connection;
