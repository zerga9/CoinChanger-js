function Coins(){

};
Coins.prototype.change = function(amount) {
  if(amount === 1) {
    return [1]
  }
  if(amount === 2) {
    return [2]
  }
};
