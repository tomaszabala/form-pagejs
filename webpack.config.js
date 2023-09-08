const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app.js", // Ruta al archivo de entrada principal (app.js en tu caso)
  output: {
    filename: "bundle.js", // Nombre del archivo de salida
    path: path.resolve(__dirname, "dist"), // Ruta de salida (carpeta "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // Ruta a tu archivo index.html
    }),
  ],
};
