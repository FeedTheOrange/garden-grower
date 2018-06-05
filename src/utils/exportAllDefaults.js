
export default (context) => {
  const obj = {};
  context.keys().forEach((key) => {
    if (key !== '.' && key !== '..') {
      const name = key.replace(/\.\//, '').split('.')[0];
      if (name !== 'index') {
        obj[name] = context(key).default;
      }
    }
  });

  return obj;
};
