$('#btn').on('click', function(){
  var query = $('#field').val();
  console.log(query);
  $('.answers').empty();

  var wikiapi="https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + query + "&callback=JSON_CALLBACK";


  $.ajax({
    type:'GET',
    url: wikiapi,
    dataType: 'jsonp',
    success: function(res){
      $.each(res.query.pages, function(index, value){
        var holder ='<a class="link" href="https://en.wikipedia.org/?curid='+value.pageid+'"><h3 class="title">'+value.title+'</h3></a>';
        $('.answers').append(holder);
      });
    }
  });


});
