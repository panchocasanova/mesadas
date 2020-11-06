const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.styles([
    'resources/assets/plantilla/plugins/bootstrap-select/css/bootstrap-select.min.css',
    'resources/assets/plantilla/css/bootstrap.min.css',
    'resources/assets/plantilla/css/core.css',
    'resources/assets/plantilla/css/components.css',
    'resources/assets/plantilla/css/icons.css',
    'resources/assets/plantilla/css/pages.css',
    'resources/assets/plantilla/css/menu.css',
    'resources/assets/plantilla/css/responsive.css',
    'resources/assets/plantilla/css/fontsSourceSansPro.css',
    'resources/assets/plantilla/css/fontsYantramanav.css',
], 'public/css/allPancho.css');

mix.scripts([
    'resources/assets/plantilla/js/jquery-3.5.1.js',
    'resources/assets/plantilla/js/bootstrap.min.js',
    'resources/assets/plantilla/js/metisMenu.min.js',
    'resources/assets/plantilla/js/waves.js',
    'resources/assets/plantilla/js/jquery.slimscroll-1.3.8.js',
    'resources/assets/plantilla/plugins/bootstrap-select/js/bootstrap-select.min.js',
    'resources/assets/plantilla/js/jquery.core.js',
    'resources/assets/plantilla/js/jquery.app.js'
], 'public/js/allPancho.js');
mix.js('resources/js/app.js','public/js/app.js');
