describe("Coins", function() {
  beforeEach(function() {
    coins = new Coins();
  });
  it("should give 1 penny for 1", function() {
    expect(coins.change(1)).toEqual([1]);
  });
  it("should give 2 pence for 2", function() {
    expect(coins.change(2)).toEqual([2]);
  })
  it("should give 5 pence for 5", function() {
    expect(coins.change(5)).toEqual([5]);
  })
  it("should give 10 pence for 10", function() {
    expect(coins.change(10)).toEqual([10]);
  })
  it("should give 20 pence for 20", function() {
    expect(coins.change(20)).toEqual([20]);
  })
  it("should give 50 pence for 50", function() {
    expect(coins.change(50)).toEqual([50]);
  })
  it("should give 1 pound for 100", function() {
    expect(coins.change(100)).toEqual([100]);
  })
  it("should give 200 pence for 200", function() {
    expect(coins.change(200)).toEqual([200]);
  })

})
