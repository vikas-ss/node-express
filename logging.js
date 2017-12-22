var {logger} = require('./config/log-config.js');

var apiLogger = logger.loggers.get('api');

logger.log("info", "Hello !! Writing to app.log");
apiLogger.info("Hello !! Writing to api.log");
