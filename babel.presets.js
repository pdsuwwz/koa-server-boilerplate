module.exports = {
  getPresetsEnv (isModule = true) {
    return [
      '@babel/preset-env', {
        targets: {
          node: '10.18.1'
        },
        modules: isModule ? 'auto' : false
      }
    ]
  }
}
