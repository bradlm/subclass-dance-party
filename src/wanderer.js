var Wanderer = class Wanderer extends BlinkyDancer {
  constructor(top, left, timeBetweenSteps, classType) {
    super(top, left, timeBetweenSteps, classType || 'Wanderer');
  }
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    this.timeStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag
    var height = rng($(window).height() / 2);
    var spaceHeight = rng($(window).height()) - height / 2;
    var spaceWidth = rng($(window).width()) - height / 2;
    var rngHex = [1, 2, 3, 4, 5, 6].reduce(str => str + hexArray[rng(hexArray.length)], '#');
    //var width = (spaceWidth / 2);
    this.$node.animate({
      top: '' + spaceHeight,
      left: '' + spaceWidth, 
      height: '' + height, 
      width: '' + height,
      borderColor: rngHex,
      backgroundColor: rngHex
    });
  }
};

//https://v.theverse.space/9jlw180huwhxs/source.gif