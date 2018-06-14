describe("Coin", function() {
  beforeEach(function() {
    coin = new Coin();
  });

  it("should give 1 penny for 1", function() {
    expect(coin.change(1)).toEqual([1]);
  });

  it("should give 2 pence for 2", function() {
    expect(coin.change(2)).toEqual([2]);
  });

  it("should give 5 pence for 5", function() {
    expect(coin.change(5)).toEqual([5]);
  });

  it("should give 10 pence for 10", function() {
    expect(coin.change(10)).toEqual([10]);
  });

  it("should give 20 pence for 20", function() {
    expect(coin.change(20)).toEqual([20]);
  });

  it("should give 50 pence for 50", function() {
    expect(coin.change(50)).toEqual([50]);
  });

  it("should give 2pence and 1 penny for 3", function() {
    expect(coin.change(3)).toEqual([2, 1]);
  });

  it("should give 5 pence and 2pence coins for 7", function() {
    expect(coin.change(7)).toEqual([5, 2]);
  });
  it("should give 50p, 20p, 10p, 5p ,2p and 1p for 88", function() {
    expect(coin.change(88)).toEqual([50, 20, 10, 5, 2, 1]);
  });
  it("should give 50p, 2 * 20p, 5p , 2*2p for 99", function() {
    expect(coin.change(99)).toEqual([50, 20, 20, 5, 2, 2]);
  });

})
