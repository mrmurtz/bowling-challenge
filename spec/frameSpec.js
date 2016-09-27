describe("Frame", function(){
  var frame1;

  beforeEach(function(){
    frame1 = new Frame();
  });

    it('each frame starts with 10 pins', function(){
      expect(frame1._pinsRemaining).toEqual(10);
    })

    it("rollFirst can hit 4 pins and pins left are 6", function(){
      frame1.rollFirst(4);
      expect(frame1._pinsRemaining).toEqual(6);
    });

    it("rollSecond can hit 3 more pins and pins left are 3", function(){
      frame1.rollFirst(4);
      frame1.rollSecond(3);
      expect(frame1._pinsRemaining).toEqual(3);
    });

    it("_currentScore returns 3 after 7 pins knocked down", function() {
      frame1.rollFirst(4);
      frame1.rollSecond(3);
      frame1.frameScore();
      console.log(frame1._currentScore);
      expect(frame1._currentScore).toEqual(7);
    });

    it("_rollAgain on 4 pins should be true", function(){
      frame1.rollFirst(4);
      expect(frame1._rollAgain).toEqual(true);
    });


    it("_rollAgain on 10pins should be false", function(){
      frame1.rollFirst(10);
      expect(frame1._rollAgain).toEqual(false);
    });



});
