const path = require('path');

module.exports = {
  mode: 'production', // Production mode
  entry: './src/client/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
