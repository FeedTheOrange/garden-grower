import exportAllDefaults from '../utils/exportAllDefaults';

const context = require.context('.', false, /\.js/);
export default exportAllDefaults(context);
