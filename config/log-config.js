var logger = require('winston');

logger.add(logger.transports.File, { filename: '/var/log/todo-logs/app.log' });

logger.loggers.add('api', {
  console: {
    colorize: true,
    label: 'API'
  },
  file: {
    filename: '/var/log/todo-logs/api.log'
  }
});

logger.remove(logger.transports.Console);

module.exports = {logger};
