import exportAllDefaults from '../../utils/exportAllDefaults';

const context = require.context('.', false, /\.jsx/);
export default exportAllDefaults(context);
