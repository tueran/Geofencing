var exec = require('cordova/exec');
/**
 * Constructor
 */
function Geofencing() {}

Geofencing.prototype.sayHello = function() {
  exec(function(result){
      // result handler
      alert(result);
    },
    function(error){
      // error handler
      alert("Error" + error);
    }, 
    "Geofencing", 
    "sayHello", 
    []
  );
}

var Geofencing = new Geofencing();
module.exports = Geofencing