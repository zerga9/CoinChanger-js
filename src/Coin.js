function Coin(){
  this.coins = [50, 20, 10, 5, 2, 1];
};

Coin.prototype.change = function(amount) {
  var changed = []
  this.coins.forEach(function(coin) {
    if(amount >= coin) {
      var many = Math.floor(amount / coin);
      while(many > 0) {
        changed.push(coin);
        amount -= coin
        many -= 1
      }
    }
  })
  return changed;
}
