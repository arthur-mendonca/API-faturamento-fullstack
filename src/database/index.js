const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Occurrence = require("../models/Ocurrence");

const connection = new Sequelize(dbConfig);

User.init(connection);
Occurrence.init(connection);

User.associate(connection.models);
Occurrence.associate(connection.models);

module.exports = connection;
