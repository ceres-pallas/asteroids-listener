var hat = require('hat');

var rack = hat.rack();

var Bag = module.exports = function(){
    this.callbacks = {};
}
Bag.prototype.add = function(callback){
    var id = rack();
    this.callbacks[id] = callback;
}
Bag.prototype.forEach = function(callback){
    for (var id in this.callbacks) {
	callback.call(this, this.callbacks[id], id);
    };
}
