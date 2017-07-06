//const for the google map address, so we can append the api key and query
//let lat = "";
//let lng = "";
//let mapUri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAvj9VvY2BwnE5WeKWKWYmzEhqtZnO5tCA"


const container = document.getElementById("container");
//array of obj
const locations = [
   { lat: 51.5074, lng: 0.1278 },
   { lat: 48.8566, lng: 2.3522 },
   { lat: 40.7128, lng: -74.0059 },
   { lat: -22.4382, lng: 101.5290 },
   { lat: 41.9028, lng: 12.4964 },
   { lat: 35.6895, lng: 139.6917 }
 ]

var wow = function(){
  let ul = document.createElement("ul");
  ul.id = "listContainer";
  document.getElementById("container").appendChild(ul);

//for each obj, call api
for(let i=0;i<locations.length;i++){
   let mapUri = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locations[i].lat},${locations[i].lng}&key=AIzaSyAvj9VvY2BwnE5WeKWKWYmzEhqtZnO5tCA`
//new request obj, open, onload, onerror, send
let request = new XMLHttpRequest()
request.open("GET", mapUri, true);
request.onload = onloadFunc;
request.onerror = onerrorFunc;
request.send();
  }
}


function onloadFunc(){
  const resp = JSON.parse(this.response);
  console.log(resp);
  var li = document.createElement("li");
  //if results, print most specific results as li inside ul
      if(resp.results.length>0){
      li.innerHTML = resp.results[0].formatted_address;
    }else{
      //if no results, print an error message as li inside ul
      li.innerHTML = "Sorry, no results were found"
    }
    document.getElementById("listContainer").appendChild(li);
    }


function onerrorFunc(){
  //print error message as li inside ul
var li = document.createElement("li");
li.innerHTML = "Sorry, an error occurred";
document.getElementById("listContainer").appendChild(li);
}
