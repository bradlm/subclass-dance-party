var Wanderer = class Wanderer extends BlinkyDancer {  
  constructor(top, left, timeBetweenSteps, classType) {
    super(top, left, timeBetweenSteps, classType || 'Wanderer');
  }
  action() {
    var height = rng($(window).height() / 2);
    var spaceHeight = rng($(window).height()) - height / 2;
    var spaceWidth = this.lineUp ? 0 : rng($(window).width()) - height / 2;
    var rngHex = [1, 2, 3, 4, 5, 6].reduce(str => str + hexArray[rng(hexArray.length)], '#');
    //var width = (spaceWidth / 2);
    this.$node.animate({
      top: '' + spaceHeight,
      left: '' + spaceWidth, 
      height: '' + height, 
      width: '' + height,
      borderColor: rngHex,
      backgroundColor: rngHex
    }, this.timeBetweenSteps > 500 ? this.timeBetweenSteps : 500);
  }
};