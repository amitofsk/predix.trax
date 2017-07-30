var name = "bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImxlZ2FjeS10b2tlbi1rZXkiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiJkYmU5ODBjMTZlN2Q0ZmEzOWZiYzA3M2U5NjRkNTIwYSIsInN1YiI6ImFwcF9jbGllbnRfaWQiLCJzY29wZSI6WyJ0aW1lc2VyaWVzLnpvbmVzLmYzZTFlZjI3LTk1NDMtNGI1ZS1hMTVmLTE4NmVlZWVhMzZkMy5pbmdlc3QiLCJ0aW1lc2VyaWVzLnpvbmVzLmYzZTFlZjI3LTk1NDMtNGI1ZS1hMTVmLTE4NmVlZWVhMzZkMy5xdWVyeSIsInRpbWVzZXJpZXMuem9uZXMuZjNlMWVmMjctOTU0My00YjVlLWExNWYtMTg2ZWVlZWEzNmQzLnVzZXIiLCJ1YWEucmVzb3VyY2UiLCJvcGVuaWQiLCJ1YWEubm9uZSIsInByZWRpeC1hc3NldC56b25lcy41OGE2ZmEzYy0yM2QyLTQzNWMtOWIzNy03YjVlZWQ0NDVjNjgudXNlciJdLCJjbGllbnRfaWQiOiJhcHBfY2xpZW50X2lkIiwiY2lkIjoiYXBwX2NsaWVudF9pZCIsImF6cCI6ImFwcF9jbGllbnRfaWQiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjEwZDg1NGQxIiwiaWF0IjoxNTAxNDE4OTcwLCJleHAiOjE1MDE0NjIxNzAsImlzcyI6Imh0dHBzOi8vNzdhMzg2N2ItY2NlMC00MjNkLWE4ZWMtNDQ4ZDIwNDI2OTg0LnByZWRpeC11YWEucnVuLmF3cy11c3cwMi1wci5pY2UucHJlZGl4LmlvL29hdXRoL3Rva2VuIiwiemlkIjoiNzdhMzg2N2ItY2NlMC00MjNkLWE4ZWMtNDQ4ZDIwNDI2OTg0IiwiYXVkIjpbInVhYSIsIm9wZW5pZCIsInByZWRpeC1hc3NldC56b25lcy41OGE2ZmEzYy0yM2QyLTQzNWMtOWIzNy03YjVlZWQ0NDVjNjgiLCJ0aW1lc2VyaWVzLnpvbmVzLmYzZTFlZjI3LTk1NDMtNGI1ZS1hMTVmLTE4NmVlZWVhMzZkMyIsImFwcF9jbGllbnRfaWQiXX0.v8LMhDJ_lhUwIc6lhJ2N03QLkwGUcOjf6ljiY1Sr35VZevY-bV_soFAbPguJscJ7eYCMh8-rVLtqYv0gGlnOHLRBLhObGeTs86dBasJDJAipSOxuZHshqt7YgGNZwUzd5R_2upxFrQRFvWPrfNZd-1ckh7YShXLGpJ9uCgm_5pmSdh-jgts6cSD-qUhgi2fM6xeuHOa97ThHBDRHMXyqCIcHI6PARfo6222tZeStnDwU1VpxKUAc_d8SenDKaxF6XWbGzsmFefu9tG3VCMGjV6afqRra_69ts7A71PgmIpjLCbLn1jIqiWlkJ5TKQ4iyc-bgxqf5bI2FrL1qPZY0sA";

function AuthenticateLocation1(){

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
        "method": "POST",
        "headers": {
            "authorization": name,
            "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
         },
        "processData": false,
        "data": "{\n  \"tags\": [\n    {\n      \"name\": \"car-gps1\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

    $.ajax(settings).done(function (response) {
        var string = JSON.stringify(response);
        var part1 = string.indexOf("[1");
        var part2 = string.indexOf("],[");
        var GPS = string.slice(part1 + 1 ,part2);
        plotPoint1(GPS);
    })
    
}

function AuthenticateLocation2(){
    var string = " ";
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
        "method": "POST",
        "headers": {
            "authorization": name,
            "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
            "content-type": "application/json",
            "cache-control": "no-cache",
            "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
    },
       "processData": false,
       "data": "{\n  \"tags\": [\n    {\n      \"name\": \"car-gps2\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

    $.ajax(settings).done(function (response) {
        string = JSON.stringify(response);
        var string = JSON.stringify(response);
        var part1 = string.indexOf("[1");
        var part2 = string.indexOf("],[");
        var GPS = string.slice(part1 + 1 ,part2);
        plotPoint2(GPS);
    })
}


function AuthenticationHumidity1() {
   var ret; 
    var temp1 = getTemp1Data(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getHumid1Data(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Temperature:STORAGE1\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

 $.ajax(settings).done(function (response) {
        
        string = JSON.stringify(response);
        Humid = HumidityHist1(string);
        cb(temp);
        
    })
    
}

function AuthenticationHumidity2() {
   var ret; 
    var temp1 = getTemp1Data(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getHumid1Data2(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Temperature:STORAGE2\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

 $.ajax(settings).done(function (response) {
        
        string = JSON.stringify(response);
        Humid = HumidityHist2(string);
        cb(temp);
        
    })
    
}

function AuthenticationTemp1() {
   var ret; 
    var temp1 = getTemp1Data(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getTemp1Data(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Temperature:STORAGE1\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

 $.ajax(settings).done(function (response) {
        
        string = JSON.stringify(response);
        temp = CurrentTemp1(string);
        cb(temp);
        
    })
    
}

function AuthenticationTemp2() {
   var ret; 
    var temp1 = getTemp1Data(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getTemp2Data(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Temperature:STORAGE2\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

 $.ajax(settings).done(function (response) {
        
        string = JSON.stringify(response);
        temp = CurrentTemp2(string);
        cb(temp);
        
    })
    
}

function plotPoint1(stringz){
    console.log(stringz);
    var arr = stringz.replace(/"/g, " ");
    var arr1 = arr.split(" ");
    var almost = arr1[1].replace(","," ");
    var done = almost.split(" ");
    var lat = done[0];
    var long1 = done [1];
    var long = long1.replace(long1.substring(11, long1.length), "");
    
    var latfront = lat.substr(0,2);
    var latEnd = lat.substr(2, lat.length -1);
    var parseLatfront = parseFloat(latfront);
    var parseLatEnd = parseFloat(latEnd);

    var latitude = parseLatfront + (parseLatEnd/60);
    
    var longfront = long.substr(1,2);
    
    var longEnd = long.substr(3, long.length);
    var parseLongfront = parseFloat(longfront);
    //console.log(parseLongfront);
    var parseLongEnd = parseFloat(longEnd);
    var longitude = parseLongfront + (parseLongEnd * .016 );
   
    initMap(latitude, -1 * longitude); 
    console.log(latitude);
    console.log(longitude);
 }


function plotPoint2(string){
    console.log(string);
    var arr = string.replace(/"/g, " ");
    var arr1 = arr.split(" ");
    var almost = arr1[1].replace(","," ");
    var done = almost.split(" ");
    var lat = done[0];
    var long1 = done [1];
    var long = long1.replace(long1.substring(11, long1.length), "");
    
    var latfront = lat.substr(0,2);
    var latEnd = lat.substr(2, lat.length -1);
    var parseLatfront = parseFloat(latfront);
    var parseLatEnd = parseFloat(latEnd);

    var latitude = parseLatfront + (parseLatEnd/60);
    
    var longfront = long.substr(1,2);
    var longEnd = long.substr(3, long.length);
    var parseLongfront = parseFloat(longfront);
    var parseLongEnd = parseFloat(longEnd);
    
    var longitude = parseLongfront + (parseLongEnd * .016 );
   
    initMap(latitude, -1 * longitude); 
 }

 function initMap(lat, long) {
     var uluru = {lat: lat, lng: long};
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: uluru
     });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
         
}

function Humidity1(string){

    var part1 = string.indexOf("[1");
    var part2 = string.indexOf("],[");
    var Humidity = string.slice(part1 + 1 ,part2);

    var arrayHumidity = Humidity.split(",");
    var currentHumidity = arrayHumidity[1];
    console.log(currentHumidity);
    
    return currentHumidity;
}

function Humidity2(string){

    var part1 = string.indexOf("[1");
    var part2 = string.indexOf("],[");
    var Humidity = string.slice(part1 + 1 ,part2);

    var arrayHumidity = Humidity.split(",");
    var currentHumidity = arrayHumidity[1];
    
    return currentHumidity;
}

function CurrentTemp1(string){

    var part1 = string.indexOf("[1");
    var part2 = string.indexOf("],[");
    var temp = string.slice(part1 + 1 ,part2);

    var arrayTemp = temp.split(",");
    var currentTemp = arrayTemp[1];
    //console.log(currentTemp);
    return currentTemp;
}

function CurrentTemp2(string){

    var part1 = string.indexOf("[1");
    var part2 = string.indexOf("],[");
    var temp = string.slice(part1 + 1 ,part2);

    var arrayTemp = temp.split(",");
    var currentTemp = arrayTemp[1];

    return currentTemp;
}

function HistoricalLocationData1(){
   var ret; 
    var temp1 = getHistLoData(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getHistLoData(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"car-gps1\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

 $.ajax(settings).done(function (response) {
        
        string = JSON.stringify(response);
        var string = JSON.stringify(response);
        var part1 = string.indexOf("[1");
        var part2 = string.lastIndexOf("],");
        var values = string.slice(part1, part2);
        var arr = values.replace(/,/g, " ");
        var split = arr.split(" [");
        temp = split;
        cb(temp);
        
    })
    
}
function HistoricalLocationData2(){
   var ret; 
    var temp1 = getHistLoData2(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getHistLoData2(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"car-gps2\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

 $.ajax(settings).done(function (response) {
        
        string = JSON.stringify(response);
        var string = JSON.stringify(response);
        var part1 = string.indexOf("[1");
        var part2 = string.lastIndexOf("],");
        var values = string.slice(part1, part2);
        var arr = values.replace(/,/g, " ");
        var split = arr.split(" [");
        temp = split;
        cb(temp);
        
    })
    
}

function HistoricalHumidityData1(){
   var ret; 
    var temp1 = getHistHuData1(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getHistHuData1(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Humidity:STORAGE1\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}
$.ajax(settings).done(function (response) {
   var string = JSON.stringify(response);
   var part1 = string.indexOf("[1");
   var part2 = string.lastIndexOf("],");
   var values = string.slice(part1, part2);

   var arr = values.replace(/,/g, " ");
   var split = arr.split(" [");
   
    temp = split;
    cb(temp);
   

});

}

function HistoricalHumidityData2(){
   var ret; 
    var temp1 = getHistHuData2(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getHistHuData2(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Humidity:STORAGE2\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}
$.ajax(settings).done(function (response) {
   var string = JSON.stringify(response);
   var part1 = string.indexOf("[1");
   var part2 = string.lastIndexOf("],");
   var values = string.slice(part1, part2);

   var arr = values.replace(/,/g, " ");
   var split = arr.split(" [");
   
    temp = split;
    cb(temp);
   

});

}

function HistoricalTemp1(){
   var ret; 
    var temp1 = getOtherData1(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getOtherData1(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Temperature:STORAGE1\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

$.ajax(settings).done(function (response) {
   var string = JSON.stringify(response);
   var part1 = string.indexOf("[1");
   var part2 = string.lastIndexOf("],");
   var values = string.slice(part1, part2);

   var arr = values.replace(/,/g, " ");
   var split = arr.split(" [");
   
    temp = split;
    cb(temp);
  
});
    
}

function HistoricalTemp2(){
   var ret; 
    var temp1 = getOtherData2(function(data){
       
       ret = data;
   });
   
  return ret;
}

function getOtherData2(cb){
     
    var settings = {
       "async": false,
       "crossDomain": true,
       "url": "https://time-series-store-predix.run.aws-usw02-pr.ice.predix.io/v1/datapoints",
       "method": "POST",
       "headers": {
           "authorization": name,
           "predix-zone-id": "f3e1ef27-9543-4b5e-a15f-186eeeea36d3",
           "content-type": "application/json",
           "cache-control": "no-cache",
           "postman-token": "85a5fa7b-e057-be81-dd70-874945782993"
      },
      "processData": false,
      "data": "{\n  \"tags\": [\n    {\n      \"name\": \"Temperature:STORAGE2\",\n      \"order\": \"desc\"\n    }\n  ],\n  \"start\":1501276077\n\t\n}"
}

$.ajax(settings).done(function (response) {
   var string = JSON.stringify(response);
   var part1 = string.indexOf("[1");
   var part2 = string.lastIndexOf("],");
   var values = string.slice(part1, part2);

   var arr = values.replace(/,/g, " ");
   var split = arr.split(" [");
   
    temp = split;
    cb(temp);
  
});
    
}