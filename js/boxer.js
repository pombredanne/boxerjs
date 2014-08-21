window.boxerjs = (function() {
  function BoxerJs($) {
    this.$ = $;
    console.log("Set lib to " + $);
  };

  BoxerJs.prototype.box = function(selector) {
    return "Hola";
  };

  var bjs = {
    // version - manually edited
    version: function(x) {
      var v = {
        major: 0,
        minor: 1,
        patch: 0
      };
      if(typeof x !== 'undefined' &&
         v.hasOwnProperty(x)) {
        return v[x];
      }
      return v.major + "." + v.minor + "." + v.patch; 
    },

    setlib: function($) {
      return new BoxerJs($);
    },
  };
  return bjs;
}());
