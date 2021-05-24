/**
 * global-define-module.js
 * 
 * @author  Jakim Hernández <egalink@gmail.com>
 * @version 1.0.0
 * @url     http://jakim.me
 */

/** global define,module */
;(function (root, factory) {
    
    if (typeof define === 'function' && define.amd) {
      define(factory);
    } else if (typeof exports === 'object') {
      module.exports = factory();
    } else {
      root.module = factory();
    }

}) (this, function () {

    /* ----------------------------------------------------------- */
    /* == module */
    /* ----------------------------------------------------------- */
  
    function Module (options) {

        var defaults = {
        };
  
        // extends config
        this.config = extend({}, defaults, options);

        // init modal
        this.initialize();
    }

    Module.prototype.initialize = function () {
        console.log(this);
        return this;
    };
  
    /* ----------------------------------------------------------- */
    /* == helpers */
    /* ----------------------------------------------------------- */

    function extend () {
        //
        for (var i = 1; i < arguments.length; i ++)
        for (var k in arguments[i]) if (Object.prototype.hasOwnProperty.call(arguments[i], k) === true) {
            arguments[0][k] = arguments[i][k];
        }

        return arguments[0];
    }

    /* ----------------------------------------------------------- */
    /* == return */
    /* ----------------------------------------------------------- */

    return { module: Module };

});
  