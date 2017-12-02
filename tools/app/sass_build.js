var vfs = require('vinyl-fs');
var converter = require('sass-convert');

vfs.src('./src/sass')
    .pipe(converter({
        from: 'sass',
        to: 'scss'
    }))
    .pipe(vfs.dest('./output'));
