const mix = require("laravel-mix");

mix
  .js("resources/js/app.js", "public/assets/js")
  .react()
  .postCss("resources/css/app.css", "public/assets/css", [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer")
  ])
  .webpackConfig(require("./webpack.config"));

if (mix.inProduction()) {
  mix.version();
}

mix.disableNotifications();
