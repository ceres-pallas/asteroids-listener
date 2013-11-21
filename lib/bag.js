var Bag = module.exports = function(){
    this.callbacks = [];
}
Bag.prototype.add = function(callback){
    this.callbacks.push(callback);
}
Bag.prototype.forEach = function(callback){
    this.callbacks.forEach(callback);
}
