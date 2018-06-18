// Gulpfile.js
const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const cssModules   = require('postcss-modules');
const path         = require('path');
const fs           = require('fs');

const buildPath = "./src/base/css";
function getJSONFromCssModules(cssFileName, json) {
    const cssName       = path.basename(cssFileName, '.css');
    const jsonFileName  = path.resolve(buildPath, cssName + 'ClassNames.json');
    fs.writeFileSync(jsonFileName, JSON.stringify(json, null, 2));
}

gulp.task('bulma-css-as-json', function() {
    return gulp.src('./node_modules/bulma/css/bulma.css')
        .pipe(postcss([
            cssModules({
                generateScopedName: '[local]',
                getJSON: getJSONFromCssModules
            }),
        ]))
});

