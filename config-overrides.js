// Override create-react-app webpack configs without ejecting
// https://github.com/timarney/react-app-rewired

module.exports = function override (config, env) {
  config.resolve.extensions = ['.jsx', '.js']
  return config
}