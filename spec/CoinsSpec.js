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

})
