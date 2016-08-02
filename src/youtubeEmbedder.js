$(document).ready(function() {
  //http://jsfiddle.net/slabmedia/n8x9oadh/
  //https://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html


  //http://pauldbergeron.com/articles/streaming-youtube-to-mp3-audio-in-nodejs.html possible 
  $('#videoButton').on('click', event => {
    var match = $('#videoURL')[0].value
      .match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    var youTubeId = match && match[2].length === 11 ? match[2] : undefined;
    if (youTubeId) {
      $('#videoEmbed').remove();
      $('#videoDiv').prepend($('<iframe id="videoEmbed" src="https://www.youtube.com/embed/' + youTubeId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'));
      //audioAnalyzer();
    } else {
      $('#videoEmbed').attr('src', '').remove();
      $('#videoDiv').prepend($('<p id="videoEmbed" style="height:100%">No video found.</p>'));
    }
  });
});