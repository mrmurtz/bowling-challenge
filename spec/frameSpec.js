describe("Frame", function(){
  var frame1;

  beforeEach(function(){
    frame1 = new Frame();
  });

    it('each frame starts with 10 pins', function(){
      expect(frame1._pinsRemaining).toEqual(10);
    });

    it("rollFirst can hit 4 pins and pins left are 6", function(){
      frame1.roll(4);
      expect(frame1._pinsRemaining).toEqual(6);
    });

    it("rollSecond can hit 3 more pins and pins left are 3", function(){
      frame1.roll(4);
      frame1.roll(3);
      expect(frame1._pinsRemaining).toEqual(3);
    });

    it("_currentScore returns 3 after 7 pins knocked down", function() {
      frame1.roll(4);
      frame1.roll(3);
      frame1.frameScore();
      expect(frame1._currentScore).toEqual(7);
    });

    it("_rollAgain on 4 pins should be true", function(){
      frame1.roll(4);
      expect(frame1._rollAgain).toEqual(true);
    });


    it("_rollAgain on 10pins should be false", function(){
      frame1.roll(10);
      expect(frame1._rollAgain).toEqual(false);
    });

    it("throws error if trying to rollagain on pins 10", function(){
      frame1.roll(10);
      expect(function(){
        frame1.roll(2);
      }).toThrowError("Can't roll again");
    });

    it("numRolls to be 2 after 2 rolls", function(){
      frame1.roll(3);
      frame1.roll(3);
      expect(frame1._numRolls).toEqual(2);
    });

    it("throws error if trying to rollagain and numRolls is 2", function(){
      frame1.roll(10);
      expect(function(){
        frame1.roll(2);
      }).toThrowError("Can't roll again");

    it("_currentScore is 6 after one roll", function(){
      frame1.roll(6);
      expect(frame1._currentScore).toEqual(6);
    });


    });

});
