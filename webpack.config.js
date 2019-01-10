const path=require('path');

console.log(path.join(__dirname,'public'));

module.exports={
entry:'./src/app.js',
output:{
path:path.join(__dirname,'public'),
filename:'bundle.js'
},
module:{
rules:[{
    loader:'babel-loader', test:/\.js$/,
    exclude:/node_modules/
},
{
    test:/\.s?css$/,
    use:['style-loader','css-loader','sass-loader'
] // different way of using 'loader'
}
]
},
devtool:'cheap-module-eval-source-map' , //Source maps  tracks errors to the original file not bundle.js
devServer: {
    contentBase: path.join(__dirname, 'public')
  }

};
