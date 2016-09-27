function Frame(){
  this._pinsRemaining = 10;
  this._currentScore = 0;
  this._rollAgain = true;
}

Frame.prototype = {
  roll: function(num){
    if (this._rollAgain == true) {
      this._pinsRemaining -= num;
      if (this._pinsRemaining  === 0) {
        this._rollAgain = false;
      }
      else {
        this._rollAgain = true;
      }
    } else {
      throw Error ("Strike, can't roll again");
    }

  },

  frameScore: function(){
    this._currentScore = (10 - this._pinsRemaining);
  },

}
