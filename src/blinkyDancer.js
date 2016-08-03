var BlinkyDancer = class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, classType, node) {
    super(top, left, timeBetweenSteps, classType || 'BlinkyDancer', node);
  }
  timeStep() {
    super.step();
  }
  step() {
    this.timeStep();
    this.action();
  }
  action() {
    this.$node.toggle();
  }
};