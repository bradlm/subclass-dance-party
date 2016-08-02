var SpaceShip = class SpaceShip extends BlinkyDancer {
  constructor(top, left, timeBetweenSteps, classType) {
    super(top, left, timeBetweenSteps, classType || 'SpaceShip');
  }
  step() {
    // call the old version of step at the beginning of any call to this new version of step
    this.timeStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  }
};
