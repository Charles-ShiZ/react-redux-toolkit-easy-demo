/* eslint安装教程
 * 1. npm i eslint --save-dev (如果支持ts，则需安装 npm i typescript --save-dev，否则会报错)
 * 2. npx eslint --init (以问答方式初始化eslint，并生成eslintrc配置文件)
 * 3. npx eslint index.js [--fix] (在命令行上运行eslint，加上--fix，会根据配置自动修复)
 * 4. 在eslint配置文件的rules中，添加需要的规则。规则网站(https://eslint.org/docs/rules/)

 * eslint vscode插件
 * eslint只能在命令行中对文件进行语法校验和修复，但结合vscode插件就可以一键修复文件。
 * vscode插件只要点击安装即可，无需其他操作。
*/
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended", // eslint的默认配置
        "plugin:react/recommended", // react的默认eslint配置
        "plugin:@typescript-eslint/recommended" // typescript的默认eslint配置
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": { // https://eslint.org/docs/rules, 可以在这个网站查找需要的自行配置
        "semi": ["error", "always"],
        // semi:分号
        // error:表示提示错误最高等级。有三个等级，分别是off、warn、error，也可以分别使用0、1、2表示
        // always:表示--fix时，自动加上分号。还有另一个，never，表示自动去掉分号。
        // 推荐设置成 ["error", "always"]，分号能加则加，尽量地减少错误。
        "quotes": ["error", "double"],
        // quotes:引号
        // error:同上
        // double: 表示--fix时，自动改为双引号。single则是单引号。
        // 推荐设置成 ["error", "double"]
        "curly": "error",
        // curly: 表示if、white、for等后面是否要求大括号
        "default-case": "error",
        "react/display-name":"off",
        "@typescript-eslint/explicit-module-boundary-types":"off"
    },
    "settings": {
        "react": {
            "version": "detect"
            // 表示自动匹配最新版本的react
        }
    }
}
