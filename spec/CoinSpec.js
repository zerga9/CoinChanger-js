describe("Coin", function() {
  beforeEach(function() {
    coin = new Coin();
  });

  it("should give 1 penny for 1", function() {
    coin.change(1);
    expect(coin.coins).toEqual([1]);
  });

  it("should give 2 pence for 2", function() {
    coin.change(2);
    expect(coin.coins).toEqual([2]);
  });

  it("should give 5 pence for 5", function() {
    coin.change(5);
    expect(coin.coins).toEqual([5]);
  });

  it("should give 10 pence for 10", function() {
    coin.change(10);
    expect(coin.coins).toEqual([10]);
  });

  it("should give 20 pence for 20", function() {
    coin.change(20);
    expect(coin.coins).toEqual([20]);
  });

  it("should give 50 pence for 50", function() {
    coin.change(50);
    expect(coin.coins).toEqual([50]);
  });

  it("should give 2pence and 1 penny for 3", function() {
    coin.change(3)
    expect(coin.coins).toEqual([2, 1]);
  });

  it("should give 5 pence and 2pence coins for 7", function() {
    coin.change(7)
    expect(coin.coins).toEqual([5, 2]);
  });
  it("should give 1*50p, 2*20p, 1*5p and 2*2p for 99", function() {
    coin.change(99)
    expect(coin.coins).toEqual([50, 20, 20, 5, 2, 2]);
  });

})
