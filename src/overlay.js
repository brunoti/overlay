var uuid = require('an-uuid');
var is = require('./helpers/is.js');

/**
 * Makes an overlay on page to use whe tyou are loading.
 *
 * @param {Element|String} container - The container to put the overlay above.
 * @param {Object} [options=defaultOptions] - The container to put the overlay above.
 */
function overlay(container, options) {
  var container = container;
  if (!is.node(container) && is.string(container)) {
    this.container = document.querySelector(container);
  } else {
    throw new Error('You mas pass an valid HTML Element to Overlay Plugin');
  }

  Object.assign({
    displayIcon: true,
    color: 'text-dark',
    icon: 'fa fa-refresh fa-spin fa-2x',
    title: 'Carregando...',
    desc: ''
  }, options);

  return {
    show: function() {
      var id = uuid();
      var icon = options.displayIcon ? `<span class="overlay-icon"><i class="${options.icon}"></i></span>` : '';
      var overlay = `<div class="overlay-content">${icon}<p class="overlay-content-title">${this.options.title}</p>${this.options.desc}</div>`;
      var element = document.createElement('div');

      return null;
    },
    hide: function() {
      var element = document.getElementById(this.container.dataset.overlayId);

      if (element) {
        element.parentNode.removeChild(element);
        this.container.classList.remove('overlay-wrap');
      }

      return null;
    }
  };
}

module.exports = overlay;

