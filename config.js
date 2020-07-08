const API_KEY = "pk.eyJ1IjoiY2FybGFpciIsImEiOiJjazFja3JjYncwMTJlM2xteWl2czY4aWg0In0.gxpkCgiMg1Fo7voVsLNlHw";

var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery Â© <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var marker = L.marker([35.2271, -80.8431], {
	title: "This Marker is in Charlotte, NC"
});

marker.bindPopup("Hello from Charlotte, NC!");

var myMap = L.map("map", {
	center: [35.2271, -80.8431],
	zoom: 10});
	
streets.addTo(myMap);
marker.addTo(myMap);
