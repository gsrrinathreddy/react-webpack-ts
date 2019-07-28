const path = require('path');
const rules =  [
    {
        test:/\.tsx?/,
        exclude:/node_modules/,
        loader:'babel-loader'
      }
]
const CURRENT_WORKING_DIR = process.cwd();
module.exports = {
    target:'web',
    mode:'development',
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
        
    },
    module:{rules:rules},
    resolve:{extensions:['.ts','.tsx','.js']},
    devServer:{
        contentBase:'./public/',
        port:5000
    }
}
