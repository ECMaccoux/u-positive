module.exports = env => {

    const ENV = env.NODE_ENV
    const path = require('path')
    const MODE = (ENV === 'prod') ? 'production' : 'development'
    const CURR_PATH = env.NODE_ENV === 'prod' ? path.join(__dirname, 'dist/') : path.join(__dirname, 'dev/');
    console.log('Rendering in the following environment: ' + MODE)
    
      return {
        mode: MODE,
        entry: {
            home: './src/index.js'
        },
        module: {
          rules: [
            {
                test: /\.css$/i,
                use: ['css-loader']
              },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
        },
        output: {
          filename: 'index.js',
          path: CURR_PATH
        }
      }
      };