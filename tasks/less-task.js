const less = require('less');
const through = require('through2');

module.exports = function compileLess(options = { }) {
  return through.obj((file, encoding, cb) => {
    if(file.isBuffer()) {
      return less.render(file.contents.toString(), options)
        .then(result => {
          file.contents = Buffer.from(result.css)
          cb(null, file);
        })
        .catch(err => {
          cb(err, null);
        });
    }

    cb('No buffer available.', null);
  });
}