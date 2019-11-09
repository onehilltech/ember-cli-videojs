/* globals videojs */

import Component from '@ember/component';
import layout from '../templates/components/videojs-player';

import { computed } from '@ember/object';

export default Component.extend({
  layout,

  classNames: ['video-js'],

  tagName: 'video',

  controls: true,

  autoplay: false,

  preload: 'auto',

  width: undefined,

  height: undefined,

  options: computed ('{controls,autoplay,preload,height,width}', function () {
    return this.getProperties (['controls', 'autoplay', 'preload', 'width', 'height']);
  }),

  didInsertElement () {
    this._super (...arguments);

    this._player = videojs (this.element, this.options);
  },

  willDestroyElement () {
    this._super (...arguments);

    this._player.dispose ();
  }
});
