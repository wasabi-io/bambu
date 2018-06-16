// Gulpfile.js
var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var cssModules   = require('postcss-modules');
var path         = require('path');
var fs           = require('fs');
const fsExtra = require("fs-extra");

const buildPath = "./src/base/css";
function getJSONFromCssModules(cssFileName, json) {
    var cssName       = path.basename(cssFileName, '.css');
    var jsonFileName  = path.resolve(buildPath, cssName + 'ClassNames.json');
    fs.writeFileSync(jsonFileName, JSON.stringify(json, null, 2));
}

gulp.task('css', function() {
    return gulp.src('./node_modules/bulma/css/bulma.css')
        .pipe(postcss([
            cssModules({
                generateScopedName: '[local]',
                getJSON: getJSONFromCssModules
            }),
        ]))
});

gulp.task('default', ['css']);
