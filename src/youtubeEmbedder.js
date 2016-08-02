$(document).ready(function() {
  //http://jsfiddle.net/slabmedia/n8x9oadh/
  //https://www.patrick-wied.at/blog/how-to-create-audio-visualizations-with-javascript-html
  $('#videoButton').on('click', event => {
    var match = $('#videoURL')[0].value
      .match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    var youTubeId = match && match[2].length === 11 ? match[2] : 'no video found';
    $('#videoDiv').prepend($('<iframe id="videoEmbed" src="https://www.youtube.com/embed/' + youTubeId + '?autoplay=1" frameborder="0" allowfullscreen></iframe>'));
  });
});