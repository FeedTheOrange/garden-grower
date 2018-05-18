// logging
import { createLogger } from 'redux-logger';

exports.initDev = (middleware) => middleware.push(createLogger());
