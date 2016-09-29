function Game(){
  this._frameHistory = []
  this._scoreBoard = []
  this._currentFrame;
}

Game.prototype = {

  newFrame: function () {
    this._currentFrame = new Frame();

  },

  score: function () {
    this._frameHistory[0]
    this._scoreBoard.push(currentFrame.frameScore());
  },
  roll: function(){
    console.log(!this._currentFrame);
    if (!this._currentFrame) {
      this._currentFrame = new Frame();
      this._currentFrame.roll();
    }
    else if (this._currentFrame && this._currentFrame._rollAgain) {
      this._currentFrame.roll();
    }
    else {
      throw Error ("Can't roll again");
    }
  }

  
};
