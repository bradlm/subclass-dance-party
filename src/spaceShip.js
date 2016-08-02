var spaceShipArray = [
  'https://v.theverse.space/7oetfzirq64cp/source.gif',
  'https://v.theverse.space/eibl4fzcvfdp3/source.gif',
  'https://v.theverse.space/9jlw180huwhxs/source.gif',
  'https://v.theverse.space/gwzl9z2xksw45/source.gif',
  'https://v.theverse.space/fgoyka02pgtaj/source.gif',
  'https://v.theverse.space/n1v97krk0lh3g/source.gif',
  'https://v.theverse.space/xamwq1vcy59p7/source.gif',
  'https://v.theverse.space/zmzqho1op2z70/source.gif',
  'https://v.theverse.space/amx6oe8761vua/source.gif',
  'https://v.theverse.space/iwcvovp0barsz/source.gif',
  'https://v.theverse.space/iaus4r108lfvb/source.gif',
  'https://v.theverse.space/yqe6y6t013s1i/source.gif',
  'https://v.theverse.space/atwqb2sbxlpzv/source.gif',
  'https://v.theverse.space/3os6p94km08kw/source.gif',
  'https://v.theverse.space/nii50gh96rse1/source.gif',
  'https://v.theverse.space/qdxda2lbe80nr/source.gif',
  'https://v.theverse.space/rygj4uswelkaa/source.gif',
  'https://v.theverse.space/wi2dhkwl9fu1m/source.gif',
  'https://v.theverse.space/ygmwzxepgxb4e/source.gif',
  'https://v.theverse.space/r90bmio6f7to9/source.gif',
  'https://v.theverse.space/o3ejdizjgs3vf/source.gif',
  'https://v.theverse.space/00jzc7qog8d3i/source.gif',
  'https://v.theverse.space/zptzzf6r7132i/source.gif',
  'https://v.theverse.space/p1qm59ya028q2/source.gif',
  'https://v.theverse.space/sf9wimm010pqz/source.gif',
  'https://v.theverse.space/3a3e11dwnz89k/source.gif',
  'https://v.theverse.space/lrei0xfsx9xhe/source.gif',
  'https://v.theverse.space/fa7ecxiijsh0w/source.gif',
  'https://v.theverse.space/dbjvt3wkh238m/source.gif'
];

var SpaceShip = class SpaceShip extends BlinkyDancer {
  constructor(top, left, timeBetweenSteps, classType, node) {
    node = $('<img src="' + spaceShipArray[rng(spaceShipArray.length)] + '" class="dancer-element ' + (classType || 'SpaceShip') + '">');
    super(top, left, timeBetweenSteps, classType, node);
  }
  action() {
    var spaceHeight = rng($(window).height()) - this.$node.height() / 2;
    var spaceWidth = rng($(window).width()) - this.$node.width() / 2;
    //var width = (spaceWidth / 2);
    this.$node.animate({
      top: '' + spaceHeight,
      left: '' + spaceWidth
    });
  }
};

//https://v.theverse.space/9jlw180huwhxs/source.gif