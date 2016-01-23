(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.overlay = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var t =
  [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c',
  '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26',
  '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33',
  '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40',
  '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d',
  '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a',
  '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67',
  '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74',
  '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81',
  '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e',
  '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b',
  '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8',
  'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5',
  'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2',
  'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf',
  'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc',
  'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9',
  'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6',
  'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];
module.exports = function() {
  var A = Math.random()*0xffffffff, B = Math.random()*0xffffffff,
      C = Math.random()*0xffffffff, D = Math.random()*0xffffffff;
  return  t[A&0xff] + t[A>>8&0xff] + t[A>>16&0xff] + t[A>>24&0xff] + '-' +
          t[B&0xff] + t[B>>8&0xff] + '-' +
          t[B>>16&0x0f|0x40] + t[B>>24&0xff] + '-' +
          t[C&0x3f|0x80] + t[C>>8&0xff] + '-' +
          t[C>>16&0xff] + t[C>>24&0xff] + t[D&0xff] + t[D>>8&0xff] + t[D>>16&0xff] + t[D>>24&0xff];
}

},{}],2:[function(require,module,exports){
/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.function = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};

},{}],3:[function(require,module,exports){
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


},{"./helpers/is.js":2,"an-uuid":1}]},{},[3])(3)
});