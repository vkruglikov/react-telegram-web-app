module.exports = process.env.NODE_ENV === 'test' ? {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
} : {};
