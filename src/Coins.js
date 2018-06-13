function Coins(){

};
Coins.prototype.change = function(amount) {
  if(amount === 1) {
    return [1];
  }
  if(amount === 2) {
    return [2];
  }
  if(amount === 5) {
    return [5];
  }
  if(amount === 10) {
    return [10];
  }
  if(amount === 20) {
    return [20];
  }
  if(amount === 50) {
    return [50];
  }
  if(amount === 100) {
    return [100];
  }
  if(amount === 200) {
    return [200];
  }
};
