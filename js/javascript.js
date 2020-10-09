// service worker //
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
};

//Injecting html using javascript//
//With the help of: https://css-tricks.com/template-literals/ //
//Head
const head_links = {
    index_css: "css/index.css",
    manifest: "manifest.json"
};
const head = templater `<link rel="stylesheet" href="${'index_css'}">
  <link rel="manifest" href="${'manifest'}">
  <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">`;
const call_head = head(head_links);
//Displays here
document.getElementById("head").innerHTML = call_head;

//Navigation
const nav_links = {
    index: "index.html",
    about: "about.html",
    prevention: "whatnow.html",
    sources: "sources.html"
};
const navigation = templater`<div class="insidenav" id="insidenav">
  <a href="${'index'}">Coronavirus Count</a>
  <a href="${'about'}">About Coronavirus</a>
  <a href="${'prevention'}">How to prevent it</a>
  <a href="${'sources'}">Sources</a>
</div>`;
const call_nav = navigation(nav_links);
//Displays here
document.getElementById("navigation").innerHTML = call_nav;

//Need this
function templater(strings, ...keys) {
    return function(data) {
        let temp = strings.slice();
        keys.forEach((key, i) => {
            temp[i] = temp[i] + data[key];
        });
        return temp.join('');
    }
};

//To easily update date when information was last entered
let date = {
  day:24,
  month:`September`,
  year:2020,
  saydate(){
    return (`${this.day} ${this.month} ${this.year}`);
  }
};
//Display date in index.html
var span = document.getElementById("as_of");
span.textContent = date.saydate();

const country = [
  {
	"name": "Australia",
  "no_case":26808,
  "state":[
    {
      "state_name":"Northern Territory",
      "no_case":0
    },
    {
      "state_name":"Queensland",
      "no_case":27
    },
    {
      "state_name":"Victoria",
      "no_case":991
    },
    {
      "state_name":"New South Wales",
      "no_case":148
    },
    {
      "state_name":"Western Australia",
      "no_case":5
    },
    {
      "state_name":"South Australia",
      "no_case":0
    },
    {
      "state_name":"Tasmania",
      "no_case":0
    }
  ],
}, {
	"name": "United States of America",
	"no_case": 423516
},{
  "name":"India",
  "no_case":902397
},{
  "name":"Brazil",
  "no_case":65423
},{
  "name":"Russia",
  "no_case":439680
},{
  "name":"Spain",
  "no_case":4135
},{
  "name":"Italy",
  "no_case":4543
},{
  "name":"UK",
  "no_case":322921
},{
  "name":"Japan",
  "no_case":43263
},{
  "name":"Iraq",
  "no_case":412343
},{
  "name":"China",
  "no_case":0
}];
console.log(country);

//Ausrtalia has states, so if Australia is chosen, the states select box will show
function show_state(){
  if(document.getElementById('country').value=='1'){
  document.getElementById('state').style.display="block"}
  else if(document.getElementById('country').value=='2'){
    document.getElementById('state').style.display="none";}
  };

//Main 'show me' button
function showcase(){
  var _australia = document.getElementById('country').value == '1';
  var state_value = document.getElementById('state').value;
  var _usa = document.getElementById('country').value =='2';
//if user does not enter any country or state, an alert will tell user to enter country,
//otherwise, link 1 & 2 will show as normal
  if (document.getElementById('country').value > 0){
  document.getElementById("hide_count").style.display="block";
  document.getElementsByClassName("_link")[0].style.display="block";
  document.getElementsByClassName("_link")[1].style.display="block";}
  else {alert("Please Enter A Country");}
//Will show information based on what country and state user picks
  if (state_value =='0' && _australia){
    document.getElementById("state_name").innerHTML = country[0].name;}
  else if (state_value == '1' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[0].state_name;}
  else if (state_value == '2' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[1].state_name;}
  else if (state_value == '3' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[2].state_name;}
  else if (state_value == '4' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[3].state_name;}
  else if (state_value == '5' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[4].state_name;}
  else if (state_value == '6' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[5].state_name;}
  else if (state_value == '7' && _australia){
    document.getElementById("state_name").innerHTML = country[0].state[6].state_name;}

  if (_usa){
    document.getElementById("state_name").innerHTML = country[1].name;
  }
};

//Side Navigation
function opennav(){
if (document.getElementById('insidenav').style.width == '250px')
  {document.getElementById('insidenav').style.width = "0px";
  document.body.style.backgroundColor = "white";}
else {
  document.getElementById('insidenav').style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}
};
