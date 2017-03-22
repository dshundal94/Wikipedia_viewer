/*Need to create specialized url based on search*/
var html = '';

/*Will only return searches for pages that exist, search needs to be spelled right*/
function search() {
  var searchTerm = $('#search').val();
  var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
  $.getJSON(url, function(response) {
    $('.results').empty();
    for (var i = 0; i < response[1].length; i++) {
      html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + response[1][i] + '"target="_blank"><h3>' + response[1][i] + '</h3><p>' + response[2][i] + '</p></a></div>';
      $(".results").append(html);
      }      
    });
 

  // Will output search after every key stroke
  if ($('#search').val().length > 0) {
    $('.articles').css('display', 'none');

  } else if ($('#search').val().length < 1) {
    // display everything again
    $('.articles').css('display', 'block');
  }
  
  $('#search').unbind('keyup');
  $('#search').keyup(function() {
    search();
  });
}

$('#search').keyup(function() {
  search();
});