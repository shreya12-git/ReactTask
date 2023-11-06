const browserify = require('browserify');

browserify({
  entries: ['./src/index.js'],
  outfile: './bundle.js',
})
  .plugin('babel', { presets: ['@babel/preset-react'] })
  .bundle()
  .on('error', function (err) {
    console.log(err);
  });
