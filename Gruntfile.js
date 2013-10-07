/*jshint node:true */
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        mocha: {
            options: {
                reporter: 'Nyan',
                run: true
            },
            mousetrap: {
                src: ['tests/jtrap.html']
            }
        },

        complexity: {
            options: {
                errorsOnly: false,
                cyclomatic: 10,
                halstead: 30,
                maintainability: 85
            },
            generic: {
                src: [
                    'jtrap.js'
                ]
            },
            plugins: {
                src: [
                    'plugins/**/*.js',
                    '!plugins/**/tests/**',
                    '!plugins/**/*.min.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-mocha');

    grunt.registerTask('default', [
        'complexity',
        'mocha'
    ]);
};
