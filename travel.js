var root_url = "http://comp426.cs.unc.edu:3001/";

var miami_intro = "  Described as the only great city of the world that started as a fantasy, Miami, with its subtropical climate, naturally protected harbor, and spectacular beaches, has traditionally been a haven for tourists and retirees. Since the late 1980s, however, the city has sustained unprecedented growth and, while transforming its image, has emerged as a center of international finance and commerce and as a regional center for Latin American and Haitian art.With easy access to other parts of the country, Miami has developed into one of America's major transportation hubs, and thriving job and housing markets have made it an ideal location for business expansion and new construction.";
var nyc_intro = "  New York is a city of superlatives: America's biggest; its most exciting; its business and cultural capitals; the nation's trendsetter. The city seems to pull in the best and the brightest from every corner of the country. The city's ethnic flavor has been nuanced by decades of immigrants whose first glimpse of America was the Statue of Liberty guarding New York Harbor and by large expatriate communities such as the United Nations headquartered there. Just minutes from the multimillion-dollar two-bedroom co-op apartments of Park Avenue, though, lies some of the most dire urban poverty in America. But the attendant crime that affects New Yorkers and visitors alike has seen a continued dramatic reduction from 1993 to 2004—NYC has a murder rate half that of cities such as Los Angeles and Chicago, in part as the result of a concerted effort by local agencies.";
var chicago_intro = "  Chicago, the seat of Illinois's Cook County and the third largest city in the country, is the focus of a consolidated metropolitan statistical area that covers the primary metropolitan statistical areas of Gary, Indiana; Kankakee, Illinois; and Kenosha, Wisconsin. Brawling was the word Carl Sandburg applied to Chicago in his poem about the city. No longer the Hog Butcher for the World, at the dawn of the twenty-first century, Chicago is still an enthusiastically combative city with a lively political life. A railroad hub in the latter half of the nineteenth century, when its population had already reached 300,000 people, Chicago became a major force in the nation's development. Today, it is a national transportation, industrial, telecommunications, and financial leader as well as a city of great architectural significance, ethnic diversity, and cultural wealth.";
var la_intro = "   Los Angeles is the second largest city in the United States in terms of population and one of the largest in terms of area. It is the center of a five-county metropolitan area and is considered the prototype of the future metropolis—a city on the cutting edge of all of the advantages and the problems of large urban areas. The glamour of Hollywood, Beverly Hills, the Sunset Strip, and the famous beaches have added to Los Angeles's reputation as a California paradise and have contributed to the area's phenomenal growth. Los Angeles is a city of fascinating diversity, incorporating one of the largest Hispanic populations in the United States, a major Asian community, and sizable populations of nearly every ethnic background in the world.";
var houston_intro = "  During the late 1970s Houston epitomized opulence, glitter, and opportunity. The city's major industry, petrochemicals, rode the crest of a boom in the oilpatch, as Houstonians say. Get-rich-quick growth became a predominant feature across the sprawling landscape of the city. By 1982, however, a national recession, coupled with a wildly fluctuating oil market and devaluation of the Mexican peso, changed Houston's outlook from boom to bust. Unemployment and the local economy reached depression levels by 1985, prompting a painful retrenchment. Houston's recovery and subsequent expansion are the result of the growth of energy independent industry and diversification. Optimism is back in Houston as the city looks to new opportunities in high-technology and service industries.";
var sf_intro = "  The term melting pot is used to describe many American cities and towns. This is indeed true for San Francisco, one of the few truly international cities in the United States. The neighborhoods are varied, yet each features a cohesiveness as unique as its inhabitants. Rows of elegant houses, the famous cable cars, clusters of ethnic neighborhoods, and the colorful waterfront all add to the distinctive international flavor of the city. Nearly half of those who live in the Bay Area were born outside of the United States or have at least one nonnative parent. The city's well-known hills offer stunning views of the Pacific Ocean and San Francisco Bay, and feature a wide array of shops, restaurants, and cosmopolitan nightlife.";
var charlotte_intro = "  Charlotte, known as the Queen City, offers a fascinating mix of southern culture and growing business mecca. A major economic center with growing finance and defense industries, the city's economic base continues to develop at a rate more than twice that of the rest of the country. An excellent interstate highway system, good railroad access, and an inland port facility are other factors that have made Charlotte the major distribution center of the Southeast and one growing in both national and international importance.";
var philly_intro = "  Rich in history and culture, Philadelphia has been in the forefront of the nation's intellectual, economic, and humanitarian development for more than three hundred years. Today its efforts are being directed to restoration with an emphasis on preserving the best of the past while allowing for the development of a vigorous new city. A city of neighborhoods, trees, parks, and open spaces, Philadelphia offers the advantages of living in a big city while maintaining a small-town atmosphere and preserving reminders of its dignified past. The Greater Philadelphia area has been on numerous best city lists as a good place to balance work and family life.";
var seattle_intro = "  Little more than a century ago, Seattle—nicknamed The Emerald City—was a pioneer outpost and a quiet lumbering town. Transformed by the Yukon gold rush into a thriving metropolis, Seattle has become the transportation, manufacturing, commercial, and services hub for the Pacific Northwest as well as the largest urban area north of San Francisco, California. The city's arts community has gained an international reputation, annually drawing audiences from throughout the United States and abroad. Nestled between two magnificent mountain ranges, with a breathtaking view of a lake and bay, Seattle enjoys a climate one observer has likened to an airborne ocean bath.";
var atlanta_intro = "  Georgia's capital and largest city, Atlanta is a major Southern financial and cultural force and the focus of a metropolitan statistical area that covers more than 6,000 square miles and includes more than 110 municipalities. People from all over the country, joined by immigrants from other lands, have flocked to Atlanta's mild climate, physical beauty, and job opportunities. Offering Old South graciousness blended with an ambitious zest for expansion and dominance, Atlanta has assumed an important position in national and international commerce. Ted Turner, one of the city's well-known citizens, has declared that Atlanta has absolutely everything going for it—climate, location, great transportation, easy air access, and a government that's both cooperative and supportive. This is a judgment widely shared by both residents and visitors.";

var locations = [
  ['Miami', 25.761681, -80.191788, 4164138],
  ['Houston', 29.761993, -95.366302, 4699066],
  ['Seattle', 47.608013, -122.335167, 5809844],
  ['Los Angeles', 34.052235, -118.243683, 5368381],
  ['San Francisco', 37.773972, -122.431297, 5391997],
  ['Charlotte', 35.227085, -80.843124, 4612828],
  ['New York', 40.730610, -73.935242, 5128638],
  ["Atlanta", 33.753746, -84.386330, 4883772],
  ['Chicago', 41.881832, -87.623177, 4887398],
  ['Philadelphia', 39.952583, -75.165222, 5131095]
];

var round = true;
var depart_trip = false;
var return_trip = false;
var target_city;
var airport_array = [];
var airport_dict = {};
var global_plane_id; 
var global_instance_id;
var global_plane_id_r; 
var global_instance_id_r;

$(document).ready(function () { 
  // load airports
  loadAirports();

  //login 
  $(".top_menu_list").hide();
  $('#login_button').click(function(){
    var data = {
      user: {
        username: $("#username").val(),
        password: $("#password").val()
      }
    };
    $.ajax(root_url + "/sessions", {
      type: 'POST',
      data: data,
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        loadHome();
        cityView();
      },
      error: function(data) {
         alert('Login failed, please try again!');
      }
      });
  });

  // top menu button
  $("#home_button").click(function() {
    loadHome();
  });

  $("#itinerary_button").click(function() {
    loadItinerary();
  });

  $("#signout_button").click(function() {
    signOut();
  });
  
  // home page city button
  $(".city_icon p").click(function() {
    loadCity($(event.target).html());
    target_city = $(event.target).html();
  });

  // change view model in home page
  $("#list_view").click(function() {
    cityView();
  });

  $("#map_view").click(function() {
    mapView();
  });

  // city page intro section
  $("#intro_button").click(function() {
    loadIntro();
  });

  // city page weather section
  $("#weather_button").click(function() {
    loadWeather();
  });

  // city page flight section
  $("#flight_button").click(function() {
    loadFlight();
    $("#oneway_button").click(function() {
      $("#return_time").hide();
      round = false;
    });
  
    $("#roundtrip_button").click(function() {
      $("#return_time").show();
      round = true;
    });
  
    $("#search_button").click(function(){
      if($("#depart_place_val").val()==null || $("#depart_place_val").val()==""){
        alert("Please enter the departure place");
      }else{
        $("#depart_flight").hide();
        $("#return_flight").hide();
        $("#booking_banner_not_ready").show();
        $("#booking_banner_ready").hide();
        $("#depart_flight_item_list").html("");
        $("#return_flight_item_list").html(""); 
        searchFlight();
        $("#depart_flight").show();
        if(round == true) {
          $("#return_flight").show();
        }
      }
    });
  });

  $("#booking_banner_ready").click(function(){
    loadBooking();
  });
  
  // departure place search by autocomplte
  $("#depart_place_val").autocomplete({
    lookup: airport_array, 
    onSelect: function (suggestion) {
      $("#depart_place_val").val(suggestion.value);
    }
  });

 // comfirm booking
 $("#confirm_button").click(function() {
   // check info validity
   if($("#first_name_val").val() == null || $("#first_name_val").val() == "") {
     alert("Please enter a valid first name!")
   }else if($("#last_name_val").val() == null || $("#last_name_val").val() == ""){
     alert("Please enter a valid last name!")
   }else if(!$.isNumeric(($("#age_val").val())) || $("#age_val").val() < 0 || $("#age_val").val() > 100){
     alert("Please enter a valid age!")
   }else if($("#gender option:selected").val() == null || $("#gender option:selected").val() == ""){
     alert("Please enter a valid gender!")
   }else{
    // post info to database
    bookFlight();
    // clear previous info
    clearBooking();
    $(".city_page").show();      
    $(".booking_page").hide();
    $(".top_menu_list").show();
    $(".top_menu_heading").text(target_city);
   }
 });

 // cancel booking and back to flight search results
 $("#back_button").click(function() {
   clearBooking();
   $(".city_page").show();
   $(".booking_page").hide();
   $(".top_menu_list").show(); 
   $(".top_menu_heading").text(target_city);
 });

});

// load home page
function loadHome() {
  $(".top_menu_list").show();
  $(".home").show();
  $(".city_page").hide();
  $(".login").hide();
  $(".login_vedeo").hide();
  $(".itinerary_page").hide();
  $(".top_menu_heading").text("Travel Planner");
  clearFlight();
  clearWeather();
  clearItinerary();
}


function signOut(){
  $(".login").show();
  $(".login_vedeo").show();
  $(".home").hide();
  $(".city_page").hide();
  $(".top_menu_list").hide();
  $(".itinerary_page").hide();
  clearFlight();
  clearWeather();
  clearItinerary();
}

// functions to switch between two view options
function mapView(){
  $(".city_list_view").hide();
  $(".city_map_view").show();
  $("#map_view").prop("checked", true);
  initMap();
}

function cityView(){
  $(".city_list_view").show();
  $(".city_map_view").hide();
  $("#list_view").prop("checked", true); 
}

// initialize city page
function loadCity(city){
  $(".home").hide();
  $(".city_page").show();
  $(".top_menu_heading").text(city);
  loadIntro();
  if (city == "Miami") {
    document.getElementById("expandedImg").src = "image/gallery/miami/1.jpg";
    document.getElementById("first").src = "image/gallery/miami/2.jpg";
    document.getElementById("second").src = "image/gallery/miami/3.jpg";
    document.getElementById("third").src = "image/gallery/miami/4.jpg";
    document.getElementById("fourth").src = "image/gallery/miami/5.jpg";
    document.getElementById("fifth").src = "image/gallery/miami/6.jpg";
    document.getElementById("sixth").src = "image/gallery/miami/7.jpg";
    $("#intro").text(miami_intro);
    $("#arrival_place_val").html("<option value=" + "Miami - MIA" + ">Miami - MIA</option>");
  } else if (city == "New York") {
    document.getElementById("expandedImg").src = "image/gallery/nyc/1.jpg";
    document.getElementById("first").src = "image/gallery/nyc/2.jpg";
    document.getElementById("second").src = "image/gallery/nyc/3.jpg";
    document.getElementById("third").src = "image/gallery/nyc/4.jpg";
    document.getElementById("fourth").src = "image/gallery/nyc/5.jpg";
    document.getElementById("fifth").src = "image/gallery/nyc/6.jpg";
    document.getElementById("sixth").src = "image/gallery/nyc/7.jpg";
    $("#intro").text(nyc_intro);
    $("#arrival_place_val").html("<option value=" + "New York - LGA" + ">New York - LGA</option><option value=" + "New York - JFK" + ">New York - JFK</option>");
  } else if (city == "Chicago") {
    document.getElementById("expandedImg").src = "image/gallery/chicago/1.jpg";
    document.getElementById("first").src = "image/gallery/chicago/2.jpg";
    document.getElementById("second").src = "image/gallery/chicago/3.jpg";
    document.getElementById("third").src = "image/gallery/chicago/4.jpg";
    document.getElementById("fourth").src = "image/gallery/chicago/5.jpg";
    document.getElementById("fifth").src = "image/gallery/chicago/6.jpg";
    document.getElementById("sixth").src = "image/gallery/chicago/7.jpg";
    $("#intro").text(chicago_intro);
    $("#arrival_place_val").html("<option value=" + "Chicago - ORD" + ">Chicago - ORD</option><option value=" + "Chicago - MDW" + ">Chicago - MDW</option>");
  } else if (city == "Los Angeles") {
    document.getElementById("expandedImg").src = "image/gallery/la/1.jpg";
    document.getElementById("first").src = "image/gallery/la/2.jpg";
    document.getElementById("second").src = "image/gallery/la/3.jpg";
    document.getElementById("third").src = "image/gallery/la/4.jpg";
    document.getElementById("fourth").src = "image/gallery/la/5.jpg";
    document.getElementById("fifth").src = "image/gallery/la/6.jpg";
    document.getElementById("sixth").src = "image/gallery/la/7.jpg";
    $("#intro").text(la_intro);
    $("#arrival_place_val").html("<option value=" + "Los Angeles - LAX" + ">Los Angeles - LAX</option>");
  }else if (city == "Houston") {
    document.getElementById("expandedImg").src = "image/gallery/houston/1.jpg";
    document.getElementById("first").src = "image/gallery/houston/2.jpg"
    document.getElementById("second").src = "image/gallery/houston/3.jpg";
    document.getElementById("third").src = "image/gallery/houston/4.jpg";
    document.getElementById("fourth").src = "image/gallery/houston/5.jpg";
    document.getElementById("fifth").src = "image/gallery/houston/6.jpg";
    document.getElementById("sixth").src = "image/gallery/houston/7.jpg";
    $("#intro").text(houston_intro);
    $("#arrival_place_val").html("<option value=" + "Houston - HOU" + ">Houston - HOU</option><option value=" + "Houston - IAH" + ">Houston - IAH</option>");
  }else if (city == "San Francisco") {
    document.getElementById("expandedImg").src = "image/gallery/sf/1.jpg";
    document.getElementById("first").src = "image/gallery/sf/2.jpg";
    document.getElementById("second").src = "image/gallery/sf/3.jpg";
    document.getElementById("third").src = "image/gallery/sf/4.jpg";
    document.getElementById("fourth").src = "image/gallery/sf/5.jpg";
    document.getElementById("fifth").src = "image/gallery/sf/6.jpg";
    document.getElementById("sixth").src = "image/gallery/sf/7.jpg";
    $("#intro").text(sf_intro);
    $("#arrival_place_val").html("<option value=" + "San Francisco - SFO" + ">San Francisco - SFO</option>");
  }else if (city == "Charlotte") {
    document.getElementById("expandedImg").src = "image/gallery/charlotte/1.jpg";
    document.getElementById("first").src = "image/gallery/charlotte/2.jpg";
    document.getElementById("second").src = "image/gallery/charlotte/3.jpg";
    document.getElementById("third").src = "image/gallery/charlotte/4.jpg";
    document.getElementById("fourth").src = "image/gallery/charlotte/5.jpg";
    document.getElementById("fifth").src = "image/gallery/charlotte/6.jpg";
    document.getElementById("sixth").src = "image/gallery/charlotte/7.jpg";
    $("#intro").text(charlotte_intro);
    $("#arrival_place_val").html("<option value=" + "Charlotte - CLT" + ">Charlotte - CLT</option>");
  }else if (city == "Philadelphia") {
    document.getElementById("expandedImg").src = "image/gallery/philly/1.jpg";
    document.getElementById("first").src = "image/gallery/philly/2.jpg";
    document.getElementById("second").src = "image/gallery/philly/3.jpg";
    document.getElementById("third").src = "image/gallery/philly/4.jpg";
    document.getElementById("fourth").src = "image/gallery/philly/5.jpg";
    document.getElementById("fifth").src = "image/gallery/philly/6.jpg";
    document.getElementById("sixth").src = "image/gallery/philly/7.jpg";
    $("#intro").text(philly_intro);
    $("#arrival_place_val").html("<option value=" + "Philadelphia - PHL" + ">Philadelphia - PHL</option>");
  }else if (city == "Seattle") {
    document.getElementById("expandedImg").src = "image/gallery/seattle/1.jpg";
    document.getElementById("first").src = "image/gallery/seattle/2.jpg";
    document.getElementById("second").src = "image/gallery/seattle/3.jpg";
    document.getElementById("third").src = "image/gallery/seattle/4.jpg";
    document.getElementById("fourth").src = "image/gallery/seattle/5.jpg";
    document.getElementById("fifth").src = "image/gallery/seattle/6.jpg";
    document.getElementById("sixth").src = "image/gallery/seattle/7.jpg";
    $("#intro").text(seattle_intro);
    $("#arrival_place_val").html("<option value=" + "Seattle - SEA" + ">Seattle - SEA</option>");
  }else if (city == "Atlanta") {
    document.getElementById("expandedImg").src = "image/gallery/atlanta/1.jpg";
    document.getElementById("first").src = "image/gallery/atlanta/2.jpg";
    document.getElementById("second").src = "image/gallery/atlanta/3.jpg";
    document.getElementById("third").src = "image/gallery/atlanta/4.jpg";
    document.getElementById("fourth").src = "image/gallery/atlanta/5.jpg";
    document.getElementById("fifth").src = "image/gallery/atlanta/6.jpg";
    document.getElementById("sixth").src = "image/gallery/atlanta/7.jpg";
    $("#intro").text(atlanta_intro);
    $("#arrival_place_val").html("<option value=" + "Atlanta - ATL" + ">Atlanta - ATL</option>");
  }
}

// gallery picture switch on click
function openImg(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  temp_src = expandImg.src;
  expandImg.src = imgs.src;
  imgs.src = temp_src;
  expandImg.parentElement.style.display = "block";
}

// load introduction page
function loadIntro() {
  $("#flight").hide();
  $("#weather").hide();
  $("#intro").show();
}

// load flight page
function loadFlight() {
  $("#weather").hide();
  $("#intro").hide();
  $("#flight").show(); 
  document.getElementById('depart_time_val').value = new Date().toISOString().substring(0, 10);
  document.getElementById('return_time_val').value = new Date().toISOString().substring(0, 10);
}

// load weather page
function loadWeather() {
  clearWeather();
  $("#flight").hide();
  $("#intro").hide();
  $("#weather").show();
  HTTPcall(target_city);
}

// load booking page 
function loadBooking() {
  $(".city_page").hide();
  $(".booking_page").show();
  $(".top_menu_list").hide();
  $(".top_menu_heading").text("Booking");
}

function loadItinerary() {
  $(".city_page").hide();
  $(".home").hide();
  $(".itinerary_page").show();
  searchItinerary();
}
  
function clearFlight() {
  $("#depart_place_val").val('');
  $("#depart_time_val").val('2018-07-22');
  $("#return_time_val").val('2018-07-22');
  $("#roundtrip_button").prop("checked", true); 
  $("#return_time").show();
  $("#return_flight").hide();
  $("#depart_flight").hide();
  $("#booking_banner_not_ready").hide();
  $("#booking_banner_ready").hide();
  round = true;
  depart_trip = false;
  return_trip = false;
}

function clearBooking() {
  $("#first_name_val").val('');
  $("#middle_name_val").val('');
  $("#last_name_val").val('');
  $("#age_val").val('');
  $("#gender").val('');
  $("#email_val").val('');
}

function clearWeather() {
  $("#weather").html("");
}
  
function clearItinerary() {
  $(".itinerary_list").html("");
  $(".itinerary_detail").html("");
}

function checkBookingBanner(){
  if(round==true && depart_trip==true && return_trip==true){
    $("#booking_banner_ready").show();
    $("#booking_banner_not_ready").hide();
  }
  if(round==false && depart_trip==true && return_trip==false){
    $("#booking_banner_ready").show();
    $("#booking_banner_not_ready").hide();
  }
}

// open weather API
function HTTPcall(city){
  var id;
  for(var i = 0; i < locations.length; i++){
    if(city == locations[i][0]){
      id = locations[i][3];
      break;
    }
  }
  return $.get("https://api.openweathermap.org/data/2.5/weather?id=" + id + "&appid=ac141ae24c04ea59edfa71a5ab109b73",
                (response) => {
                  var temp = response.main.temp;
                  var weather = response.weather[0].description;
                  // add weather info
                  $("#weather").append("<br><br>");
                  $("#weather").append("<p> Local temperature: "+KtoF(response.main.temp)+"</p>");
                  $("#weather").append("<p> Local weather: "+response.weather[0].description+"</p>");
                  if(weather.search("rain") != -1) {
                    $("#weather").append("<p> Remember to bring an umbrella! </p>");
                  }
                  if(weather.search("clear") != -1) {
                    $("#weather").append("<p> It's a nice day! </p>");
                  }
                  if(weather.search("sunny") != -1) {
                    $("#weather").append("<p> It's a nice day! </p>");
                  }
                  $("#weather").append("<br>");
                  $("#weather").append("<img id='weather_picture'>");
                  // add weather icon
                  if(weather.search("rain") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/rainy.jpg";
                  }
                  if(weather.search("fog") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/fog.jpg";
                  }
                  if(weather.search("clear") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/clear.jpg";
                  }
                  if(weather.search("cloud") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/cloudy.jpg";
                  }
                  if(weather.search("sun") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/sunny.jpg";
                  }
                  if(weather.search("mist") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/mist.jpg";
                  }
                  if(weather.search("snow") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/snow.jpg";
                  }
                  if(weather.search("haze") != -1) {
                    document.getElementById("weather_picture").src = "image/weather/haze.jpg";
                  }
                }
    )
}

function KtoF(K_temp){
  return Math.floor(((9/5)*(K_temp - 273) + 32) * 10) / 10;
}

// google map API
function initMap(){
  var myLatlng = new google.maps.LatLng(35.850033, -97.6500523)   
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatlng
  });
  var locations = [
    ['Miami', 25.761681, -80.191788],
    ['Houston', 29.761993, -95.366302],
    ['Seattle', 47.608013, -122.335167],
    ['Los Angeles', 34.052235, -118.243683],
    ['San Francisco', 37.773972, -122.431297],
    ['Charlotte', 35.227085, -80.843124],
    ['New York', 40.730610, -73.935242],
    ["Atlanta", 33.753746, -84.386330],
    ['Chicago', 41.881832, -87.623177],
    ['Philadelphia', 39.952583, -75.165222]
  ];
  var marker, city;
  for (var i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      title: locations[i][0],
      id: i
      });
      marker.addListener('click',function(){
        var city = locations[this.id][0];
        loadCity(city);
      });
  }
}

// ajax function
function loadAirports() {
  $.ajax({
    type: 'GET',
    url: root_url + '/airports/',
    dataType: 'json',
    xhrFields: {withCredentials: true},
    async: false,
    success: function(response) {
      for (var x of response){
        airport_array.push(x.city + " - " + x.code.toUpperCase());
        airport_dict[x.code] = x.city;
      }
    },
    error: function(){
      console.log('loading airport list failed');
    }
  });
}

function searchFlight(){
  var depart_date = $("#depart_time_val").val(); 
  var return_date = $("#return_time_val").val(); 
  var arrive_name = $("#arrival_place_val option:selected").text();
  var return_code = arrive_name.substr(arrive_name.length - 3);
  var depart_name = $("#depart_place_val").val();
  var depart_code = depart_name.substr(depart_name.length - 3);
  var destination; 
  var depart; 

  // get destination airport ID
  $.ajax( {
    url: root_url + "/airports?filter[code]=" + return_code,
    type: 'GET',
    dataType: 'json',
    async: false,
    xhrFields: {withCredentials: true},
    success: function(response) {
      destination = response[0];
    },
    error: function(){
      console.log('loading destination airport failed');
    }
  });

  // get departing airport ID
  $.ajax({
    url: root_url + "/airports?filter[code]="+ depart_code,
    type: 'GET',
    dataType: 'json',
    async: false,
    xhrFields: {withCredentials: true},
    success: function(response) {
      depart = response[0];
    },
    error: function(){
      console.log('loading departure airport failed');
    }
  });

  // find flights satisfying departure and arrival place
  $.ajax({
    url: root_url + '/flights?filter[departure_id]=' + depart.id + "&filter[arrival_id]=" + destination.id,
    type: 'GET',
    dataType: 'json',
    async: false,
    xhrFields: {withCredentials: true},
    success: function(response) {
      for (var flight of response){
        var airline_id = flight.airline_id;
        var plane_id = flight.plane_id;
        var depart_time = flight.departs_at.substr(11,5);
        var arrive_time = flight.arrives_at.substr(11,5);
        // find specific instance of a given flight
        $.ajax({
          url: root_url + '/instances?filter[flight_id]=' + flight.id + "&filter[date]=" + depart_date +"&filter[is_cancelled]=false", 
          type: 'GET',
          dataType: 'json',
          async: false,
          xhrFields: {withCredentials: true},
          success: function(response) {
            // dealing with each fitting instance
            for (var ins of response){
              var airline;
              var plane;
              // find airline
              $.ajax(root_url + "/airlines/"+ airline_id, {
                type: 'GET',
                dataType: 'json',
                async: false,
                xhrFields: {withCredentials: true},
                success: function(a_response) {
                  airline = a_response;
                },
                error: function(){
                  console.log("matching airline failed");
                }
              });
              // find plane model
              $.ajax(root_url + "/planes/"+ plane_id, {
                type: 'GET',
                dataType: 'json',
                async: false,
                xhrFields: {withCredentials: true},
                success: function(p_response) {
                  plane = p_response;
                },
                error: function(){
                  console.log("matching plane model failed");
                }
              });
              // update search result UI
              $("#depart_flight_item_list").append(" <div class = 'flight_item'><div class='light_item_column1'><div class='result_airline_name'> Airline Name: " + airline.name + "</div><div class='result_airline_name'> Airplane Model: " + plane.name + "</div></div><div class='flight_item_column2'><div class='result_flight_name'> Flight Number: " + flight.number + "</div><div class='result_date'> Date: " + depart_date + "</div></div><div class='flight_item_column3'><div class='result_depature_time'> Departure Time: " + depart_time + "</div><div class='result_arrival_time'> Arrival Time: " + arrive_time + "</div></div><div class='flight_item_column4'><button class='depart_select_button' data-instance='" + ins.id + "' data-plane='" +  plane.id + "'>Select</button></div></div> "); 
              $('.depart_select_button').click(function() {
                global_plane_id = plane.id;
                global_instance_id = ins.id;
                depart_trip = true;
                $(this).parent().parent().css("background-color", "rgba(122, 127, 135, 0.1)");
                $(this).parent().parent().siblings().css("background-color", "rgba(122, 127, 135, 0.0)");
                checkBookingBanner(); 
              });
            }
          },
          error: function(){
            console.log('loading instances failed');
          }
        });
      }
    },
    error: function(){
      console.log('loading flights failed');
    }
  });
  // find returning flights
  if(round == true){
    // find flights satisfying departure and arrival place
    $.ajax({
      url: root_url + '/flights?filter[departure_id]=' + destination.id + "&filter[arrival_id]=" + depart.id,
      type: 'GET',
      dataType: 'json',
      async: false,
      xhrFields: {withCredentials: true},
      success: function(response) {
        for (var flight_r of response){
          var airline_id_r = flight_r.airline_id;
          var plane_id_r = flight_r.plane_id;
          var depart_time_r = flight_r.departs_at.substr(11,5);
          var arrive_time_r = flight_r.arrives_at.substr(11,5);
          // find specific instance of a given flight
          $.ajax({
            url: root_url + '/instances?filter[flight_id]=' + flight_r.id + "&filter[date]=" + return_date +"&filter[is_cancelled]=false", 
            type: 'GET',
            dataType: 'json',
            async: false,
            xhrFields: {withCredentials: true},
            success: function(response) {
              // dealing with each fitting instance
              for (var ins_r of response){
                console.log('Hi');
                var airline_r;
                var plane_r;
                // find airpline
                $.ajax(root_url + "/airlines/"+ airline_id_r, {
                  type: 'GET',
                  dataType: 'json',
                  async: false,
                  xhrFields: {withCredentials: true},
                  success: function(a_response) {
                    airline_r = a_response;
                  },
                  error: function(){
                    console.log("matching airline failed");
                  }
                });
                // find plane model
                $.ajax(root_url + "/planes/"+ plane_id_r, {
                  type: 'GET',
                  dataType: 'json',
                  async: false,
                  xhrFields: {withCredentials: true},
                  success: function(p_response) {
                    plane_r = p_response;
                  },
                  error: function(){
                    console.log("matching plane model failed");
                  }
                });
                // update search result UI
                $("#return_flight_item_list").append(" <div class = 'flight_item'><div class='light_item_column1'><div class='result_airline_name'> Airline Name: " + airline_r.name + "</div><div class='result_airline_name'> Airplane Model: " + plane_r.name + "</div></div><div class='flight_item_column2'><div class='result_flight_name'> Flight Number: " + flight_r.number + "</div><div class='result_date'> Date: " + return_date + "</div></div><div class='flight_item_column3'><div class='result_depature_time'> Departure Time: " + depart_time_r + "</div><div class='result_arrival_time'> Arrival Time: " + arrive_time_r + "</div></div><div class='flight_item_column4'><button class='return_select_button' data-instance='" + ins_r.id + "' data-plane='" +  plane_r.id + "'>Select</button></div></div> "); 
                $('.return_select_button').click(function() {
                  global_plane_id_r = plane_r.id;
                  global_instance_id_r = ins_r.id;
                  return_trip = true;
                  $(this).parent().parent().css("background-color", "rgba(122, 127, 135, 0.1)");
                  $(this).parent().parent().siblings().css("background-color", "rgba(122, 127, 135, 0.0)");
                  checkBookingBanner();
                });
              }
            },
            error: function(){
              console.log('loading instances failed');
            }
          });
        }
      },
      error: function(){
        console.log('loading flights failed');
      }
    });
  }
}


// click submit on booking page to book flight
function bookFlight(){
  var first_name = $("#first_name_val").val();
  var middle_name = $("#middle_name_val").val();
  var last_name = $("#last_name_val").val();
  var age = $("#age_val").val();
  var gender = $("#gender option:selected").val();
  var email = $("#email_val").val();
  var itinerary_id;
  var seat_id;
  var seat_id_r;

  // create new itinerary 
  var new_itinerary = {
    "itinerary": {
      "email" : email
    }
  };
  // post itinerary
  $.ajax( {
    url: root_url + '/itineraries',
    type: "POST",
    xhrFields: {withCredentials: true},
    data: new_itinerary,
    async: false,
    success: function(response) {
      itinerary_id = response.id;
    },
    error: function(){
      alert("posting itinerary failed");
    }
  });

  // search available seat
  $.ajax(root_url + "/seats?filter[plane_id]="+ global_plane_id, {
      type: 'GET',
      dataType: 'json',
      async: false,
      xhrFields: {withCredentials: true},
      success: function(s_response) {
         var seats = s_response;
         var seat_num = seats.length;
         var random = Math.floor((Math.random() * seat_num) + 1);
         var selected_seat = seats[random-1];
         seat_id = selected_seat.id;
      },
      error: function(){
         alert('no suitable seat available');
       }
   });
  // create new ticket 
  var new_ticket = {"ticket": {
    "first_name" : first_name,
    "middle_name": middle_name,
    "last_name": last_name,
    "age": age,
    "gender": gender,
    "seat_id": seat_id,
    "itinerary_id": itinerary_id,
    "instance_id" : global_instance_id,
    }
  };
  // post ticket
  $.ajax(root_url + "/tickets", {
    type: "POST",
    xhrFields: {withCredentials: true},
    data: new_ticket,
    async: false,
    success: function(response) {
    },
    error: function(){
      alert("posting ticket failed");
    }
  });
  // delete ticket
  $.ajax({
    url: root_url + '/seats/' + seat_id,
    type: 'DELETE',
    xhrFields: { withCredentials: true },
    success: function(s_response) {
    },
    error: function(){
     alert('delete seat available');
    }
  });

  // book returning flight
  if(round == true) {
    // search available seat
    $.ajax(root_url + "/seats?filter[plane_id]="+ global_plane_id_r, {
      type: 'GET',
      dataType: 'json',
      async: false,
      xhrFields: {withCredentials: true},
      success: function(s_response) {
         var seats_r = s_response;
         var seat_num_r = seats_r.length;
         var random_r = Math.floor((Math.random() * seat_num_r) + 1);
         var selected_seat_r = seats_r[random_r-1];
         seat_id_r = selected_seat_r.id;
      },
      error: function(){
         alert('no suitable seat available');
      }
    });
    // create new ticket 
    var new_ticket = {"ticket": {
      "first_name" : first_name,
      "middle_name": middle_name,
      "last_name": last_name,
      "age": age,
      "gender": gender,
      "seat_id": seat_id_r,
      "itinerary_id": itinerary_id,
      "instance_id" : global_instance_id_r,
      }
    };
    // post ticket
    $.ajax(root_url + "/tickets", {
      type: "POST",
      xhrFields: {withCredentials: true},
      data: new_ticket,
      async: false,
      success: function(response) {
    },
      error: function(){
      alert("posting ticket failed");
      }
    });
    // delete ticket
    $.ajax({
      url: root_url + '/seats/' + seat_id_r,
      type: 'DELETE',
      xhrFields: { withCredentials: true },
      success: function(s_response) {
      },
      error: function(){
        alert('delete seat available');
      }
    });
  }
}


// get itineraries in database
function searchItinerary() {
  // clear previous itineraries shown
  $(".itinerary_list").html("");
  $(".itinerary_detail").html("");
  // get itineraries
  $.ajax({
    url: root_url + '/itineraries',
    type: 'GET',
    dataType: 'json',
    async: false,
    xhrFields: {withCredentials: true},
    success: function(response) {
      for (var x of response){
        var itinerary_id = x.id;
        $(".itinerary_list").append('<div class="itinerary_item" onclick="searchTicket(' + itinerary_id + ')"><div class="itinerary_id"> Itinerary ID: </div><div class="itinerary_id_value">' +  itinerary_id + '</div></div>');
      }
    },
    error: function(){
      alert('loading itineraries failed');
    }
  });
}

// get tickets in database by itinerary id
function searchTicket(itinerary_id) {
  $(".itinerary_detail").html("");
  $.ajax({
    url: root_url + '/tickets?filter[itinerary_id]=' + itinerary_id, 
    type: 'GET',
    dataType: 'json',
    async: false,
    xhrFields: { withCredentials: true },
    success: function(response) {
      for (var ticket of response){
        var first_name = ticket.first_name;
        var middle_name = ticket.middle_name;
        var last_name = ticket.last_name;
        var gender = ticket.gender;
        var age = ticket.age;
        var date;
        var from;
        var to;
        var flight_number;
        var email;

        // locate itinerary
        $.ajax({
          url: root_url + '/itineraries/' + itinerary_id,
          type: 'GET',
          dataType: 'json',
          async: false,
          xhrFields: { withCredentials: true },
          success: function(response) {
            email = response.email;
          },
          error: function(){
            alert('locate itinerary failed');
          }
        });

        // locate instance
        $.ajax({
          url: root_url + '/instances/' + ticket.instance_id , 
          type: 'GET',
          dataType: 'json',
          async: false,
          xhrFields: {withCredentials: true},
          success: function(response) {
            var instance = response;
            date = instance.date;
            $.ajax({
              url: root_url + '/flights/' + instance.flight_id , 
              type: 'GET',
              dataType: 'json',
              async: false,
              xhrFields: {withCredentials: true},
              success: function(response) {
                var flight = response;
                flight_number = flight.number;
                // locate destination airport
                $.ajax( {
                  url: root_url + "/airports/" + flight.arrival_id,
                  type: 'GET',
                  dataType: 'json',
                  async: false,
                  xhrFields: {withCredentials: true},
                  success: function(response) {
                    to = response;
                  },
                  error: function(){
                    alert('locate destination airport failed');
                  }
                });
                // locate departure airport
                $.ajax({
                  url: root_url + "/airports/"+ flight.departure_id,
                  type: 'GET',
                  dataType: 'json',
                  async: false,
                  xhrFields: {withCredentials: true},
                  success: function(response) {
                    from = response;
                  },
                  error: function(){
                    alert('locate departure airport failed');
                  }
                });
              },
              error: function(){
                alert('locate instance failed');
              }
            });
          },
          error: function(){
            alert('locate instance failed');
          }
        });
        // update ticket UI
        $(".itinerary_detail").append('<div class="itinerary_ticket"><div class="ticket_column1"><div id="ticket_c1_r1" class="itinerary_ticket_cell1"> First Name: </div><div id="ticket_c1_r2" class="itinerary_ticket_cell1"> Middle Name: </div><div id="ticket_c1_r3" class="itinerary_ticket_cell1"> Last Name: </div><div id="ticket_c1_r4" class="itinerary_ticket_cell1"> Gender: </div><div id="ticket_c1_r5" class="itinerary_ticket_cell1"> Age: </div><div id="ticket_c1_r6" class="itinerary_ticket_cell1"> Date: </div><div id="ticket_c1_r7" class="itinerary_ticket_cell1"> From: </div><div id="ticket_c1_r8" class="itinerary_ticket_cell1"> To:</div><div id="ticket_c1_r9" class="itinerary_ticket_cell1"> Flight Number: </div><div id="ticket_c1_r10" class="itinerary_ticket_cell1"> Email: </div></div><div class="ticket_column2"><div id="ticket_c2_r1" class="itinerary_ticket_cell2">' + first_name + '</div><div id="ticket_c2_r2" class="itinerary_ticket_cell2">' + middle_name + '</div><div id="ticket_c2_r3" class="itinerary_ticket_cell2">' + last_name + '</div><div id="ticket_c2_r4" class="itinerary_ticket_cell2">' + gender + '</div><div id="ticket_c2_r5" class="itinerary_ticket_cell2">' + age + '</div><div id="ticket_c2_r6" class="itinerary_ticket_cell2">' +  date + '</div><div id="ticket_c2_r7" class="itinerary_ticket_cell2">' + from.name + '</div><div id="ticket_c2_r8" class="itinerary_ticket_cell2">' + to.name + '</div><div id="ticket_c2_r9" class="itinerary_ticket_cell2">' + flight_number + '</div><div id="ticket_c2_r10" class="itinerary_ticket_cell2">' + email + '</div></div></div>');
      }
    },
    error: function(){
      alert('loading itineraries failed');
    }
  });
}
