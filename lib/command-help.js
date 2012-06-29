var npminfo = require('../package.json');

var help_content = {
    'fb-init': {
        title: 'Init current directory as fb project',
        usage: 'fb init'
    },

    'fb-add': {
        title: 'Create a page to current fb project',
        usage: 'fb add <pagename>'
    },

    'fb-version': {
        title: 'Add a new version to current page',
        usage: 'fb version <versionValue>'
    },

    'fb-build': {
        title: 'Build a version of page to timestamp directory',
        usage: [
            'fb build <pageNameVersion>[ <pageNameVersion>...]',
            '    [-t|-timestamp <timestamp>]',
            '    [-v|-version <version>]'
        ]
    },

    'fb-group': {
        title: 'Group is design for build multi-pages at one time',
        usage: [
            'fb group build <groupName>',
            'fb group[ list|ls]',
            'fb group set <groupName> <pageNameVersion>[ <pageNameVersion>...]',
            'fb group get <groupName>',
            'fb group rm <groupName>'
        ]
    }

}

function printLine (content) {
    console.log('\t%s', content);
}

function printHelp(name) {
    var help;
    if (help_content[name]) {
        help = help_content[name];
        console.log('NAME');
        console.log('\t%s - %s', name, help.title);
        console.log('SYNOPSIS');
        if (typeof help.usage === 'object') {
            help.usage.forEach(function(line) {
                printLine(line);
            });
        } else {
            printLine(help.usage);
        }
    }
}

module.exports = function (bin, callback) {
    var argv = bin.argv;
    var cwd = bin.cwd;
    if (argv._.length < 2) {
        console.log('FrontBuild(fb): front end build framework');
        console.log('version: %s', npminfo.version);
        console.log('commands:');
        console.log ('\tinit, add, version, build, group, help');
        console.log('options:');
        console.log ('\t--debug: Turn on debug mode');
        callback(null, '');
    }

    if (argv._.length >= 2) {
        var content = argv._[1];
        printHelp('fb-' + content);
    }
}