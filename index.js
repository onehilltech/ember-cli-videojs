'use strict';

module.exports = {
  name: require('./package').name,

  included: function (app) {
    this._super (...arguments);

    app.import ({
      development: 'node_modules/video.js/dist/video.js',
      production:  'node_modules/video.js/dist/video.min.js'
    });

    app.import ({
      development: 'node_modules/video.js/dist/video-js.css',
      production:  'node_modules/video.js/dist/video-js.min.css'
    });
  }
};
