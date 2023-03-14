const path = require('path');

module.exports = {
	  mode: 'development',
	  entry: { app: './src/App.jsx' },
	  output: {
		      filename: '[name].bundle.js',
		      path: path.resolve(__dirname, 'public'),
		    },
	  module: {
		      rules: [
			            {
					            test: /\.jsx?$/,
					            exclude: /node_modules/,
					            use: 'babel-loader',
					          },
			            {
				              test: /\.css$/i,
				              use: ["style-loader", "css-loader"],
				    },
			      	    {		
				          test: /\.(jpe?g|png|gif|svg)$/i, 
				          loader: 'file-loader',
			      	    }
			          ],
		    },
	  optimization: {
		      splitChunks: {
			            name: 'vendor',
			            chunks: 'all',
			          },
		    },
};
