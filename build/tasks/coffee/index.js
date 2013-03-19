/*
 * Grunt Task File
 * ---------------
 *
 * Task: coffee
 * Description: Compile coffee files to js
 * Dependencies: coffee-script
 *
 */

task.registerBasicTask("coffee", "Compile coffee files to js", function(data, name) {

  var files = file.expand(data);  // files array contains filepath as strings

  // compile each coffee-script file to js
  files.forEach(function(filepath) {
      // compile and write to file
      task.helper('coffee', filepath);
  });
});

task.registerHelper('coffee', function(filepath /* String */, callback /* [Function] */) {

  var coffee = require('coffee-script');

  try {
    var answer = coffee.compile(file.read(filepath), {'sourceMap': true});
    if (answer.js) {
        file.write(filepath.replace(/\.coffee$/, '.js'), answer.js);
    }
    if (answer.v3SourceMap) {
        file.write(filepath.replace(/\.coffee$/, '.map'), answer.v3SourceMap);
    }
  }
  catch (e) {
    log.error(e.message);
  }
});