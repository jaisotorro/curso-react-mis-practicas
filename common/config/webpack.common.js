const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * Configuracion generica para los distintos ejemplos. Cada ejemplo puede sobreescribir
 * la configuracion de este fichero mediante el uso de webpack-merge. Comprueba los
 * distintos ficheros webpack.config.js de los ejemplos para ver si se modifica.
 */
module.exports = (entry) => ({
  // En este caso necesitamos que sea la propia configuracion la que indice la ruta de
  // entrada
  entry,
  output: {
    // Fuerza a que los distintos ficheros se sirvan partiendo del directorio raiz /.
    // Si no se fuerza este comportamiento, al utilizar react-router y definir rutas,
    // webpack utilizara URLs relativas como /mi-ruta/main.js causando errores.
    publicPath: "/",
  },
  module: {
    // Definimos los distintos modulos de transpilacion disponibles
    rules: [
      // Pasamos todos los ficheros .js por el transpilador de babel
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        },
      },
      // Cargamos los estilos de CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Definimos los plugins de webpack
  plugins: [
    // Utilizamos una plantilla HTML para todos los ejemplos por defecto
    new HtmlWebPackPlugin({
      template: "./common/templates/index.html",
      favicon: "./common/static/favicon.ico",
      filename: "index.html",
    }),
  ],
  // Por ahora, incluimos siempre los source maps para que las herramientas
  // de desarrollo del navegador muestren el codigo fuente
  devtool: "eval-cheap-module-source-map",
  // Configuracion del servidor de desarrollo
  devServer: {
    // Forzamos a que cualquier ruta que sea la de un fichero conocido por
    // webpack la sirva con el fichero index.html. Imprescindible cuando trabajas
    // con gestores de rutas como react-router
    historyApiFallback: true,
    // Actualiza la aplicacion en caliente de manera que el navegador carga los
    // nuevos cambios automaticamente
    hot: true,
    // Abre el navegador cuando se inicia el servidor de desarrollo.
    open: true,
    // Añadimos el proxy para los ejemplos 6.2
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
