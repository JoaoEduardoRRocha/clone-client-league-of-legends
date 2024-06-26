module.exports = {
  // ... outras configurações do webpack
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/, // Esta regra irá lidar com arquivos JSX e JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/",
            },
          },
        ],
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // ... outras regras de loader, se houver
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", "css", "scss"],
  },
};
