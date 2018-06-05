// logging
import { createLogger } from 'redux-logger';

const initDev = middleware => middleware.push(createLogger());
export default initDev;
