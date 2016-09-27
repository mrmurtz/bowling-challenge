function Frame(){
  this._pinsRemaining = 10;
  this._currentScore = 0;
  this._rollAgain = true;
}

Frame.prototype = {
  rollFirst: function(num){
    this._pinsRemaining -= num;
    if (this._pinsRemaining  === 0) {
      this._rollAgain = false;
    }
    else {
      this._rollAgain = true;
    }
  },

  rollSecond: function(num){
    this._pinsRemaining -= num;
  },

  frameScore: function(){
    this._currentScore = (10 - this._pinsRemaining);
  },

}
