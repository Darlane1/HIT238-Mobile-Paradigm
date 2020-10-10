// service worker //
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
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
    ios_touch: "img/192x192.png"
};
const head = templater `<link rel="stylesheet" href="${'index_css'}">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link rel="apple-touch-icon" href="${'ios_touch'}">`;
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
  day:9,
  month:`October`,
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
  "no_case":242,
  "state":[
    {
      "state_name":"Northern Territory",
      "no_case":0
    },
    {
      "state_name":"Queensland",
      "no_case":4
    },
    {
      "state_name":"Victoria",
      "no_case":195
    },
    {
      "state_name":"New South Wales",
      "no_case":27
    },
    {
      "state_name":"Western Australia",
      "no_case":13
    },
    {
      "state_name":"South Australia",
      "no_case":3
    },
    {
      "state_name":"Tasmania",
      "no_case":0
    }
  ],
}, {
	"name": "United States of America",
	"no_case": 2595229
},{
  "name":"India",
  "no_case":895982
},{
  "name":"Brazil",
  "no_case":465941
},{
  "name":"Russia",
  "no_case":240560
},{
  "name":"France",
  "no_case":538811
},{
  "name":"Italy",
  "no_case":4543
},{
  "name":"Mexico",
  "no_case":137789
},{
  "name":"Japan",
  "no_case":5180
},{
  "name":"Iran",
  "no_case":62901
},{
  "name":"China",
  "no_case":206
}];
console.log(country);

//Ausrtalia has states, so if Australia is chosen, the states select box will show
function show_state(){
  if(document.getElementById('country').value=='1'){
  document.getElementById('sel_state').style.display="block"}
  else if(document.getElementById('country').value > 1){
    document.getElementById('sel_state').style.display="none";}
  };

//Main 'show me' button
function showcase(){
  var _australia = document.getElementById('country').value == '1';
  var state_value = document.getElementById('state').value;
  var country_value = document.getElementById('country').value;
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
  else if (country_value == '2'){
    document.getElementById("state_name").innerHTML = country[1].name}
  else if (country_value == '3'){
    document.getElementById("state_name").innerHTML = country[2].name}
  else if (country_value == '4'){
    document.getElementById("state_name").innerHTML = country[3].name}
  else if (country_value == '5'){
    document.getElementById("state_name").innerHTML = country[4].name}
  else if (country_value == '6'){
    document.getElementById("state_name").innerHTML = country[5].name}
  else if (country_value == '7'){
    document.getElementById("state_name").innerHTML = country[6].name}
  else if (country_value == '8'){
    document.getElementById("state_name").innerHTML = country[7].name}
  else if (country_value == '9'){
    document.getElementById("state_name").innerHTML = country[8].name}
  else if (country_value == '10'){
    document.getElementById("state_name").innerHTML = country[9].name}
  else if (country_value == '11'){
    document.getElementById("state_name").innerHTML = country[10].name}
};

//Side Navigation
function opennav(){
if (document.getElementById('insidenav').style.width == '250px')
  {document.getElementById('insidenav').style.width = "0px";
  document.body.style.backgroundColor = "#333333";}
else {
  document.getElementById('insidenav').style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";}
};
