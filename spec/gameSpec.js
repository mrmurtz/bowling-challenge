describe("Game", function(){

  beforeEach(function (){
    game = new Game();
  });

  it("scoreBoard is initially empty array", function(){
    expect(game._scoreBoard).toEqual([]);
  });

})
