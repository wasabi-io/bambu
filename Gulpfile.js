// Gulpfile.js
const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const cssModules   = require('postcss-modules');
const path         = require('path');
const fs           = require('fs');

const buildPath = "./src/base/css";
const libPath = "./lib/base/css";
function getJSONFromCssModules(cssFileName, json) {
    const cssName       = path.basename(cssFileName, '.css');
    const jsonFileName  = path.resolve(buildPath, cssName + 'ClassNames.json');
    const jsonLibFileName = path.resolve(libPath, cssName + 'ClassNames.json');
    fs.writeFileSync(jsonFileName, JSON.stringify(json, null, 2));
    if (fs.existsSync(path.resolve(libPath))) {
        fs.writeFileSync(jsonLibFileName, JSON.stringify(json, null, 2));
    }
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

