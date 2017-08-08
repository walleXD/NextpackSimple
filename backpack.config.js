module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './index.js'
    ]
    // custom configs go here
    return config
  }
}
