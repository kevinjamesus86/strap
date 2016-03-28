'use strict';

var fs = require('fs'),
    url = require('url'),
    less = require('less'),
    chalk = require('chalk');

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
        next && next();
    }
}

/**
 * Compile less
 */
function parseLess(src, done) {
    var config = {
        paths: [
            'app/src',
            'app/components'
        ]
    };

    function nope(err) {
        var msg =
            '\n' +
            chalk.red('LESS Compilation Error ') +
            chalk.grey(JSON.stringify(err, null, 2)) +
            '\n';

        console.log(msg);

        done({
            css:`/** ${chalk.stripColor(msg)} */`
        });
    }

    fs.readFile('./' + src, 'utf-8', function(e, file) {
        less.render(file, config).then(done, nope);
    });
}

module.exports = {
    injectChanges: true,
    injectFileTypes: [
        'css',
        'less'
    ],
    files: [
        'app/src/**/*.{html,json,js}',
        'app/require/*.js',
        'index.html', {
            match: '**/*.{css,less}',
            options: {
                ignoreInitial: true
            },
            fn: function(event, file) {
                if (event === 'change') {
                    console.log('LESS file changed:', file);
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
