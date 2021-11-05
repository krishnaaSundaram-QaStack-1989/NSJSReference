const fs=require('fs');
if (process.env.NODE_ENV === 'development') {

  const devServerConfigPath = 'react-scripts/config/webpackDevServer.config';
  const devServerConfig = require(devServerConfigPath);
  require.cache[require.resolve(devServerConfigPath)].exports = (
    proxy,
    allowedHost
  ) => {
    const conf = devServerConfig(proxy, allowedHost);
    conf.https = {
      key: fs.readFileSync('./test/ssl/key.pem'),
      cert: fs.readFileSync('./test/ssl/cert.pem')
    };

    return conf;
  };
}

// run original script
require('react-scripts/scripts/start');

