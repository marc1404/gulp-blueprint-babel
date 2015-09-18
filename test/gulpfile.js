var babel = require('../lib/gulp-blueprint-babel');

babel({
    dependencies: [],
    input: 'app.js',
    browserify: {
        debug: true,
        basedir: 'app/client'
    }
});