var url = "https://trektravel.herokuapp.com/trips"

var successCallback = function(response){
  for(i = 0; i < response.length; i++){
    $('#trips').append("<h3><a data-open='details' href =" + url + "/" + response[i].id + ">" + response[i].name + "</a></h3>");
  };
}

$("#load").on('click', function(){
  $.get(url, successCallback);
});


$("#trips").on("click", "a", function(e){
  e.preventDefault();

  $('#details').show();
  var tripUrl = $(this).attr('href');

  $.get(tripUrl, function(trip){
    $('#name').text(trip.name);
    $('#continent').text(trip.continent);
    $('#about').text(trip.about);
    $('#category').text(trip.category);
    $('#weeks').text(trip.weeks);
    $('#cost').text(trip.cost);
    $('#tripid').text(trip.id);
    $('#id').val(trip.id);
  })
})

//Reserve Spot on trip
//Change this to be trip specific (trip id in url)


var callBack = function(){
  console.log("Success")
};

$('form').submit(function(e){
  e.preventDefault();

  var formData = $(this).serialize();
  console.log(formData);

  var reserveUrl = "https://trektravel.herokuapp.com/trips/" + this.id.value + "/reserve";

  $.post(reserveUrl,formData,callBack);
})
