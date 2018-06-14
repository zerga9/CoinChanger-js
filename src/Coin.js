function Coin(){
  this.coins = []

};
Coin.prototype.change = function(amount) {
   while(amount > 0){
    if(amount > 49){
      this.coins.push(50);
      amount -= 50
    }
    else if(amount> 19){
      this.coins.push(20);
      amount -= 20
    }
    else if(amount>9){
      this.coins.push(10);
      amount -= 10
    }
    else if(amount > 4){
      this.coins.push(5);
      amount-= 5
    }
    else if(amount > 1){
      this.coins.push(2);
      amount-= 2
    }
    else {
      this.coins.push(1);
      amount -= 1
    }
  }

}
