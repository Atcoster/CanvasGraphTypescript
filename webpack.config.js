const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');

function srcPath(subdir) {
	return path.join(__dirname, 'src', subdir);
}

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			app: srcPath('./app')
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: 'dist/'
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				uglifyOptions: {
					compress: true,
					ecma: 6,
					mangle: true
				},
				sourceMap: true
			})
		]
	},
	plugins: [
		new HTML_WEBPACK_PLUGIN({
			minify: {
				collapseWhitespace: true
			},
			hash: true,
			template: path.resolve(__dirname, './index.html')
		})
	]
};
