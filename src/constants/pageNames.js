const context = require.context('../containers/pages', false, /\.jsx/);
const pageNames = {};
context.keys().forEach((key) => {
  if (key !== '.' && key !== '..') {
    const name = key.replace(/\.\//, '').split('.')[0];
    if (name !== 'index') {
      pageNames[name] = name;
    }
  }
});

export default pageNames;
