const HttpsProxyAgent = require('https-proxy-agent');

const proxyConfig = [{
  "/uprise/*": {
    "target": "http://13.126.20.61:8080",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}];

function setupForCorporateProxy(proxyConfig) {
  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    const agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function (entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
