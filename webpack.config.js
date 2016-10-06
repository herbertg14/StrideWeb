module.exports = {

	entry : "./public/index.js",

	output: {
		filename: "public/bundle.js"
	}, 

	module: { 
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets: ['react', 'es2015']
				}
			}
		]
	}
}