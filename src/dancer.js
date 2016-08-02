// Creates and returns a new dancer object that can step
var Dancer = class Dancer {
  constructor(top, left, timeBetweenSteps, classType, node) {

    // use jQuery to create an HTML <span> tag
    this.$node = node || $('<span class="dancer-element ' + (classType || 'Dancer') + '"></span>'),
    this.top = top,
    this.left = left,
    this.keepSteppin = true, 
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.step();
  }
  step() {
    // the basic dancer doesn't do anything interesting at all on each step,
    if (this.keepSteppin) {
      setTimeout(this.step.bind(this), this.timeBetweenSteps);
    }
  }
  setPosition(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    }; 
    this.$node.css(styleSettings);
  }
  lineUp() {
    this.keepSteppin = false;
  }
  unline() {
    this.keepSteppin = true;
  }
};
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body