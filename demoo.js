
var latitude;
var longitude;
var parkedLatitude;
var parkedLongitude;
var storage;

function init() {/*Event Listener for device Ready event */
    console.log("init function");
    document.addEventListener("deviceready", onDeviceReady, false);
    storage = window.localStorage;
}
function onDeviceReady() {/*This tells which platform tool to use it */
    console.log("Location Enablingg....");
    var node = document.createElement('link');/* Element is created in node*/
    node.setAttribute('rel', 'stylesheet');/*rel=stylesheet*/
    node.setAttribute('type', 'text/css');/*type=text/css*/
    if (cordova.platformId === 'ios') {
        console.log("IOS");
        node.setAttribute('href', 'demooIos.css');
        window.StatusBar.overlaysWebView(false);/*Prevent the status bar to overlaying the webView in the app*/
        window.StatusBar.styleDefault();/*Looks same as Default status bar*/
    } else {
        console.log("Android Platform");
        node.setAttribute('href', 'demooAndriod.css');
        window.StatusBar.backgroundColorByHexString('#1565C0');
    }
}
function setCss(element, property, value) {
    var node = document.getElementById(element).style;
    node.setProperty(property, value);
}
function SLocation() {
    navigator.geolocation.getCurrentPosition(setLocationSuccess, locationError, {enableHighAccuracy: true});
}
function setLocationSuccess(position) {
    console.log("Location Success");
    latitude = position.coords.latitude;//get the location from the position 
    longitude = position.coords.longitude;
    console.log("latitude: " + latitude + "  longitude:  " + longitude + " Location Enabled");
    storage.setItem('parkedLatitude', latitude);//set the variables to local storage objects
    storage.setItem('parkedLongitude', longitude);
    alert("Location Enabled");
    showLocation();
}
function locationError(error) {
    alert("Error Code : " + error.code + "/nError Message: " + error.message);
}
function showLocation() {
    var latLong = new google.maps.LatLng(latitude, longitude);
    var map = new google.maps.Map(document.getElementById('map'));
    map.setZoom(16);
    map.setCenter(latLong);
    var marker = new google.maps.Marker({
        position: latLong,
        map: map
    });//Google object
    setCss('map', 'visibility', 'visible');
}

function getLocation() {
    console.log("Close is pressed");
    setCss('map', 'visibility', 'hidden');
}



