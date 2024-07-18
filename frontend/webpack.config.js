const { DefinePlugin } = require("webpack");

const getWebSocketURL = (port) => {
  const PROXY_URI = process.env.VSCODE_PROXY_URI;
  if (!PROXY_URI) return "/";
  const proxyURL = process.env.VSCODE_PROXY_URI.replace("{{port}}", port);
  wsURL = proxyURL.replace("http", "ws");
  return wsURL + "ng-cli-ws";
};

const getBasePath = (port) => {
  const PROXY_URI = process.env.VSCODE_PROXY_URI;
  if (!PROXY_URI) return "/";
  const proxyURL = process.env.VSCODE_PROXY_URI.replace("{{port}}", port);
  const intermediatePath = proxyURL.split("//")[1];
  const desiredPath = intermediatePath.substring(intermediatePath.indexOf("/"));
  return JSON.stringify(desiredPath);
};

module.exports = {
  devServer: {
    port: 8000,
    historyApiFallback: true,
    allowedHosts: "all",
    client: {
      logging: "error",
      webSocketURL: getWebSocketURL(8000),
    },
  },
  plugins: [
    new DefinePlugin({
      BASE_PATH: getBasePath(8000),
    }),
  ],
};
