const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Point d'entrée de l'application
  output: {
    filename: "bundle.js", // Nom du fichier de sortie
    path: path.resolve(__dirname, "dist"), // Répertoire de sortie
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Règle pour les fichiers CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Fichier HTML de base
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
