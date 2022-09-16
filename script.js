mapboxgl.accessToken = 'pk.eyJ1IjoicHNhZGhpdGh5YTAzIiwiYSI6ImNsODRjamdlejBhanMzcHA4d3hpNnUwbXYifQ.nk-jBhvZARUGxq9TpEfDfg';
const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/psadhithya03/cl84f4zck000m14rw577m3m03', // style URL
center: [-74.5, 40], // starting position [lng, lat]
zoom: 9, // starting zoom

});
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    }))
const nav = new mapboxgl.NavigationControl()
    map.addControl(nav)
  
    var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    })
  
    map.addControl(directions, "top-left")
