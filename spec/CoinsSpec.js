describe("Coins", function() {
  beforeEach(function() {
    coins = new Coins();
  });
  it("should give 1 penny for 1", function() {
    expect(coins.change(1)).toEqual(1);
  });

})
