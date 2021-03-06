/*
 * Created by Strawmanbobi
 * 2014-09-22
 */

var orm = require('orm');
var logger = require('../../logging/logger4js').helper;
require('../../configuration/constants');

var ormOpt;

exports.setMySQLParameter = function(dbHost, dbPort, dbName, dbUser, dbPassword) {
    logger.info("initialize mysql connection, user = " + dbUser);
    ormOpt = {
        protocol: "mysql",
        hostname: dbHost,
        port: dbPort,
        database: dbName,
        user: dbUser,
        password: dbPassword,
        charset: 'utf8',
        query: { pool: false }
    };
    exports.mysqlDB = orm.connect(ormOpt);
};