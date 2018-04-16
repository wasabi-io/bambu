var hook = require('css-modules-require-hook');
var sass = require('node-sass');

hook({
    extensions: ['.sass', '.scss'],
    preprocessCss: function (css) {
        var result =  sass.renderSync({
            data: css
        });

        return result.css;
    }
});
