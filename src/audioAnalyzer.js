//CHROME ONLY

// var audioAnalyzer = function() {
//   var ctx = new AudioContext();
//   var audio = document.getElementById('videoEmbed');
//   console.log(audio);
//   var audioSrc = ctx.createMediaElementSource(audio);
//   var analyser = ctx.createAnalyser();
//   // we have to connect the MediaElementSource with the analyser 
//   audioSrc.connect(analyser);
//   // we could configure the analyser: e.g. analyser.fftSize (for further infos read the spec)
//   // frequencyBinCount tells you how many values you'll receive from the analyser
//   var frequencyData = new Uint8Array(analyser.frequencyBinCount);
//    
//   // we're ready to receive some data!
//   // loop
//   var renderFrame = function() {
//     requestAnimationFrame(renderFrame);
//     // update data in frequencyData
//     analyser.getByteFrequencyData(frequencyData);
//     // render frame based on values in frequencyData
//     // console.log(frequencyData)
//   };
//   audio.start();
//   renderFrame();
// };