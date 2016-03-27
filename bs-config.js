'use strict';

var fs = require('fs'),
    url = require('url'),
    less = require('less');

/**
 * Compile less
 */
function parseLess(src, done) {
    var config = {
        paths: [
            'app/src'
        ]
    };
    fs.readFile('./' + src, 'utf-8', function(e, file) {
        less.render(file, config).then(done, done);
    });
}

/**
 * Run the middleware on files that contain .less
 */
function lessMiddleware(req, res, next) {
    var parsed = url.parse(req.url);
    if (parsed.pathname.match(/\.less$/)) {
        parseLess(parsed.pathname, function(o) {
            res.setHeader('Content-Type', 'text/css');
            res.end(o.css);
        });
    } else {
        next();
    }
}

module.exports = {
    injectChanges: true,
    injectFileTypes: [
        'css',
        'less'
    ],
    files: [
        'app/src/**/*.{html,css,less,js}',
        'app/require/*.js',
        'index.html', {
            match: '**/*.less',
            options: {
                ignoreInitial: true
            },
            fn: function(event, file) {
                if (event === 'change') {
                    this.reload('app/src/main.less');
                }
            }
        }
    ],
    server: {
        index: 'app/src/index.html',
        middleware: {
            2: lessMiddleware
        }
    }
};
