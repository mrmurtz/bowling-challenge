function Frame(){
  this._pinsRemaining = 10;
  this._currentScore = 0;
  this._rollAgain = true;
  this._numRolls = 0;
}

Frame.prototype = {
  roll: function(num){
    if (this._rollAgain == true && this._numRolls < 2) {
      this._pinsRemaining -= num;
      this._numRolls +=1;
      
      if (this._pinsRemaining  === 0) {
        this._rollAgain = false;
      }
      else {
        this._rollAgain = true;
      }
    } else {
      throw Error ("Can't roll again");
    }
    return this._currentScore = this.frameScore();
  },

  frameScore: function(){
    return this._currentScore = (10 - this._pinsRemaining);
  },


}

// frame understands scores per frame
