// webpack.mix.js

let mix = require('laravel-mix');

mix.sass('src/scss/styles.scss', 'css');
mix.js('src/js/app.js', 'dist').setPublicPath('dist');