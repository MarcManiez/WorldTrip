  var map;
  var countryMapObjects = {
    markers: [],
    infowindows: [],
    countriesVisited: []
  };
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 0, lng: 0},
      zoom: 2
    });

    // Adding to InfoWindow's prototype to enable toggling a unique window on/off

    google.maps.InfoWindow.prototype.opened = false;

    // Prototype for Country objects: generates markers and infowindows and pushes them to their respective lists

    function Country(country, latlong, blog_URL, gallery_URL) {
      countryMapObjects.countriesVisited.push(this);
      this.country = country;
      this.latlong = latlong;
      this.blog_URL = blog_URL;
      this.gallery_URL = gallery_URL;
      this.marker = new google.maps.Marker({position: this.latlong, title: this.country});
      countryMapObjects.markers.push(this.marker);
      this.marker.setMap(map);
      this.infowindow = new google.maps.InfoWindow({
        content: '<p><u>'+this.country+':</u></a></p>\
                  <p><a href='+this.blog_URL+'>Blog</a></p>\
                  <p><a href='+this.gallery_URL+'>Gallery</a></p>'
      });
      countryMapObjects.infowindows.push(this.infowindow);
    }

    function CloseInfowindows(){
      for (var i = 0 ; i < countryMapObjects.infowindows.length ; i++) {
        countryMapObjects.infowindows[i].close();
      }
    }

    function CreateListener(marker, infowindow){
      marker.addListener('click', function() {
        CloseInfowindows();
        if (infowindow.opened) {
          infowindow.close();
          infowindow.opened = false;
        } else {
          infowindow.open(map, marker);
          infowindow.opened = true;
        }
      });
    }

    var france = new Country("France", {lat: 46.2276, lng: 2.2137}, "http://www.detour-ahead.com/blog?tag=France", "http://www.detour-ahead.com/france/");
    var southAfrica = new Country("South Africa", {lat: -30.5595, lng: 22.9375}, "http://www.detour-ahead.com/blog?tag=South+Africa", "http://www.detour-ahead.com/south-africa/");
    var thailand = new Country("Thailand", {lat: 15.8700, lng: 100.9925}, "http://www.detour-ahead.com/blog?tag=Thailand", "http://www.detour-ahead.com/thailand/");
    var vietnam = new Country("vietnam", {lat: 14.0583, lng: 108.2772}, "http://www.detour-ahead.com/blog?tag=Vietnam", "http://www.detour-ahead.com/vietnam/");
    var cambodia = new Country("Cambodia", {lat: 12.5657, lng: 104.9910}, "http://www.detour-ahead.com/blog?tag=Cambodia", "http://www.detour-ahead.com/cambodia/");
    var india = new Country("India", {lat: 20.5937, lng: 78.9629}, "http://www.detour-ahead.com/blog?tag=India", "http://www.detour-ahead.com/india/");
    var china = new Country("China", {lat: 35.8617, lng: 104.1954}, "http://www.detour-ahead.com/blog?tag=China", "http://www.detour-ahead.com/china/");
    var japan = new Country("Japan", {lat: 36.2048, lng: 138.2529}, "http://www.detour-ahead.com/blog?tag=Japan", "http://www.detour-ahead.com/japan/");
    var unitedStates = new Country("United States of America", {lat: 37.0902, lng: -95.7129}, "http://www.detour-ahead.com/blog?tag=United+States", "http://www.detour-ahead.com/united_states/");
    var iceland = new Country("Iceland", {lat: 64.9631, lng: -19.0208}, "http://www.detour-ahead.com/blog?tag=Iceland", "http://www.detour-ahead.com/iceland/");
    var scotland = new Country("Scotland", {lat: 56.4907, lng: -4.2026}, "http://www.detour-ahead.com/blog?tag=Scotland", "http://www.detour-ahead.com/scotland/");
    var norway = new Country("Norway", {lat: 60.4720, lng: 8.4689}, "http://www.detour-ahead.com/blog?tag=Norway", "http://www.detour-ahead.com/norway/");
    var denmark = new Country("Denmark", {lat: 56.2639, lng: 9.5018}, "http://www.detour-ahead.com/blog?tag=Denmark", "http://www.detour-ahead.com/denmark/");
    var germany = new Country("Germany", {lat: 51.1657, lng: 10.4515}, "http://www.detour-ahead.com/blog?tag=Germany", "http://www.detour-ahead.com/germany/");
    var czechRepublic = new Country("Czech Republic", {lat: 49.8175, lng: 15.4730}, "http://www.detour-ahead.com/blog?tag=Czech+Republic", "http://www.detour-ahead.com/czech-republic/");
    var austria = new Country("Austria", {lat: 47.5162, lng: 14.5501}, "http://www.detour-ahead.com/blog?tag=Austria", "http://www.detour-ahead.com/austria/");
    var italy = new Country("Italy", {lat: 41.8719, lng: 12.5674}, "http://www.detour-ahead.com/blog?tag=Italy", "http://www.detour-ahead.com/italy/");

    for (var n in countryMapObjects.countriesVisited) {
      CreateListener(countryMapObjects.markers[n], countryMapObjects.infowindows[n]);
    }

  }
