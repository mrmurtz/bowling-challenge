describe("Game", function(){
  var frame;
  var game;

  beforeEach(function (){
    frame = new Frame();
    game = new Game();
  });

  // it("newFrame adds a frame into frameHistory", function(){
  //   game.newFrame();
  //   expect(game._currentFrame).toEqual(frame);
  // });

  it(".roll creates a new frame when currentFrame is empty", function(){
    game.roll(6);
    expect(game._currentFrame).toBeTruthy();
  });

  it("")


});
