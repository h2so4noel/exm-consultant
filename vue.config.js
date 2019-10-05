module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/exm-consultant/'
    : '/',
  runtimeCompiler: true,
};
