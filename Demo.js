/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*global google */


var storage;

function init(){/*Event Listener for device Ready event */
    console.log("init function");
 /*bubling phase and capturing phase*/
    document.addEventListener("deviceready", onDeviceReady(), false);
    storage=window.localStorage;
}

function onDeviceReady(){/*This tells which platform tool to use it */
   
  console.log("Uploading On Ready Method");
    var node=document.createElement('link');/* Element is created in node*/
    node.setAttribute('rel','stylesheet');/*rel=stylesheet*/
    node.setAttribute('type','text/css');/*type=text/css*/
//  if(cordova.platformId ==='ios'){
//       node.setAttribute('href','parkCarIos.css');
//      window.StatusBar.overlaysWebView(false);/*Prevent the status bar to overlaying the webView in the app*/
//       window.StatusBar.styleDefault();/*Looks same as Default status bar*/
//   }else{
        node.setAttribute('href','Android.css');
//    }
   //document.getElementByTagName('head')[0].appendChild(node);
    /*There is only one head*/
    }
    function setCss(element,property,value){
        var node=document.getElementById(element).style;
        node.setProperty(property,value);
    }
	function uploadFile() {
      console.log("Upload Function");
   var fileURL = "Phone Storage/Download";
   
   var uri = encodeURI("http://ptsv2.com/t/yguy7-1586525471/post");//  http://ptsv2.com/t/yguy7-1586525471
    alert("Uploaded File");
    var options = new FileUploadOptions();//File options run in Real time device
  
   options.fileKey = "file";
   options.fileName = fileURL.substr(fileURL.lastIndexOf('/')+1);
   options.mimeType = "text/plain";
   
   var headers = {'headerParam':'headerValue'};
   options.headers = headers;
   var ft = new FileTransfer();
   ft.upload(fileURL, uri, onSuccess, onError, options);

   function onSuccess(r) {
      console.log("Code = " + r.responseCode);
      console.log("Response = " + r.response);
      console.log("Sent = " + r.bytesSent);
   }

   function onError(error) {
      alert("An error has occurred: Code = " + error.code);
      console.log("upload error source " + error.source);
      console.log("upload error target " + error.target);
   }
	
}
    /*function setParkingLocation(){
       navigator.geolocation.getCurrentPosition(setParkingLocationSuccess,locationError,{enableHighAccuracy:true});
     }
     function setParkingLocationSuccess(position){
         console.log("Location Success");
         latitude=position.coords.latitude;//get the location from the position 
         longitude=position.coords.longitude;
         console.log("latitude: "+latitude+"  longitude:  "+longitude);
         
         storage.setItem('parkedLatitude',latitude);//set the variables to local storage objects
         storage.setItem('parkedLongitude',longitude);
          alert("Latitude: "+latitude+ "   "+"Longitude: "+longitude);
        //alert("Parking Location Was Successful");//notification
       //  showParkingLocation();
     }
     function locationError(error){
         alert("Error Code : "+ error.code+"/nError Message: "+error.message);
        // console.log("Blocked response");
     }
     function showParkingLocation(){
         setCss('directions','visibility','hidden');//element,property,value
         setCss('instructions','display','none');
         var latLong=new google.maps.LatLng(latitude,longitude);
         var map=new google.maps.Map(document.getElementById('map'));
         map.setZoom(16);
         map.setCenter(latLong);
         var marker=new google.maps.Marker({
             position:latLong,
             map:map
         });//Google object
         setCss('map','visibility','visible');
//         setCss('directions','visibility','visible');
//         setCss('instructions','display','none');
     }
      function getParkingLocation(){
           alert("Find the location");
      //navigator.geolocation.getCurrentPosition(getParkingLocationSuccess,locationError,{enableHighAccuracy:true});
    }
//    function getParkingLocationSuccess(position){
//         latitude=position.coords.latitude;//get the location from the position 
//         longitude=position.coords.longitude;
//         parkedLatitude=storage.getItem('parkedLatitude');
//         parkedLongitude=storage.getItem('parkedLongitude');
//         //notification
//         //navigator.notification.alert("Parking Location Was Successful");
//         showDirections();
//     }
//     function showDirections(){
//         var dRenderer= new google.maps.DirectionsRenderer;
//         var dService= new google.maps.DirectionsService;
//         var curLatLong= new google.maps.LatLng(latitude,longitude);
//         var parkedLatLong= new google.maps.LatLng(parkedLatitude,parkedLongitude);
//         var map=new google.maps.Map(document.getElementById('map'));
//         map.setZoom(16);
//         map.setCenter(curLatLong);
//         dRenderer.setMap(map);
//         dService.route({
//         origin:curLatLong,
//         destination:parkedLatLong,
//         travelMode:'DRIVING'
//         }),function(response,status){
//             if(status==='OK'){
//                 dRenderer.setDirections(response);
//                 document.getElementById('directions').innerHTML='';
//                 dRenderer.setPanel(document.getElementById('directions'));
//             }else{
//                 navigator.notification.alert("Directions failed due  to : "+status);
//             }
//         };
//           setCss('map','visibility','visible');
//           setCss('directions','visibility','visible');
//           setCss('instructions','display','none'); 
//     }
     function downloadFile() {
         console.log("Download Function");
   var fileTransfer = new FileTransfer();
 var uri = encodeURI("https://i.postimg.cc/W4j64Myw/gplus1069569686.png");//postimage.org
  // var uri=encodeURI("https://www.google.com");
   var fileURL =  "Storage/Download";

   fileTransfer.download(
      uri, fileURL, function(entry) {
         console.log("download complete: " + entry.toURL());
      },
		
      function(error) {
         console.log("download error source " + error.source);
         console.log("download error target " + error.target);
         console.log("download error code" + error.code);
      },
		
      false, {
         headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
         }
      }
   );
}*/
