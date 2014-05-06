module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      demo: {
        options:{
          port: 3001,
          base: '',
          keepalive: true
        }
      }
    },
    jshint:{
      options:{
        jshintrc: true
      },
      all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },
    'smush-components': {
      options: {
        fileMap: {
          js: 'demo/dependencies.js',
          css: 'demo/dependencies.css'
        }
      }
    },
    bumpup: ['bower.json', 'package.json', 'xtag.json'],
    tagrelease: {
      file: 'package.json',
      prefix: '',
      commit: true
    },
    concat:{
      dist: {
        src: [
          'ShadowDOM/src/wrappers.js',
          'ShadowDOM/src/microtask.js',
          'ShadowDOM/src/MutationObserver.js',
          "ShadowDOM/src/TreeScope.js",
          'ShadowDOM/src/wrappers/events.js',
          'ShadowDOM/src/wrappers/TouchEvent.js',
          'ShadowDOM/src/wrappers/NodeList.js',
          'ShadowDOM/src/wrappers/HTMLCollection.js',
          'ShadowDOM/src/wrappers/Node.js',
          'ShadowDOM/src/querySelector.js',
          'ShadowDOM/src/wrappers/node-interfaces.js',
          'ShadowDOM/src/wrappers/CharacterData.js',
          'ShadowDOM/src/wrappers/Text.js',
          'ShadowDOM/src/wrappers/Element.js',
          'ShadowDOM/src/wrappers/HTMLElement.js',
          'ShadowDOM/src/wrappers/HTMLCanvasElement.js',
          'ShadowDOM/src/wrappers/HTMLContentElement.js',
          'ShadowDOM/src/wrappers/HTMLImageElement.js',
          'ShadowDOM/src/wrappers/HTMLShadowElement.js',
          'ShadowDOM/src/wrappers/HTMLTemplateElement.js',
          'ShadowDOM/src/wrappers/HTMLMediaElement.js',
          'ShadowDOM/src/wrappers/HTMLAudioElement.js',
          'ShadowDOM/src/wrappers/HTMLOptionElement.js',
          'ShadowDOM/src/wrappers/HTMLSelectElement.js',
          'ShadowDOM/src/wrappers/HTMLTableElement.js',
          'ShadowDOM/src/wrappers/HTMLTableSectionElement.js',
          'ShadowDOM/src/wrappers/HTMLTableRowElement.js',
          'ShadowDOM/src/wrappers/HTMLUnknownElement.js',
          'ShadowDOM/src/wrappers/SVGElement.js',
          'ShadowDOM/src/wrappers/SVGUseElement.js',
          'ShadowDOM/src/wrappers/SVGElementInstance.js',
          'ShadowDOM/src/wrappers/CanvasRenderingContext2D.js',
          'ShadowDOM/src/wrappers/WebGLRenderingContext.js',
          'ShadowDOM/src/wrappers/Range.js',
          'ShadowDOM/src/wrappers/generic.js',
          'ShadowDOM/src/wrappers/ShadowRoot.js',
          'ShadowDOM/src/ShadowRenderer.js',
          'ShadowDOM/src/wrappers/elements-with-form-property.js',
          'ShadowDOM/src/wrappers/Selection.js',
          'ShadowDOM/src/wrappers/Document.js',
          'ShadowDOM/src/wrappers/Window.js',
          'ShadowDOM/src/wrappers/DataTransfer.js',
          'ShadowDOM/src/wrappers/override-constructors.js'
          ],
       dest: 'src/shadowdom.js',
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-smush-components');
  grunt.loadNpmTasks('grunt-tagrelease');
  grunt.loadNpmTasks('grunt-bumpup');

  grunt.registerTask('build', ['concat:dist','smush-components']);

};
