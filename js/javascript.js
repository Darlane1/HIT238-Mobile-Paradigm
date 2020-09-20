var australia = {
  "aus":{
    "state":"Australia",
    "deaths":"832",
    "caseno":"26,808"
  },
  "nt":{
    "state":"Northern Territory",
    "deaths":"0",
    "caseno":"0"
  },
  "qld":{
    "state":"Queensland",
    "deaths":"6",
    "caseno":"27"
  },
  "sa":{
    "state":"South Australia",
    "deaths":"4",
    "caseno":"0"
  },
  "wa":{
    "state":"Western Australia",
    "deaths":"9",
    "caseno":"5"
  },
  "vic":{
    "state":"Victoria",
    "deaths":"745",
    "caseno":"991"
  },
  "nsw":{
    "state":"New South Wales",
    "deaths":"52",
    "caseno":"148"
  },
  "tas":{
    "state":"Tasmania",
    "deaths":"13",
    "caseno":"0"
  }
};
var usa = {
  "usa":{
    "state":"",
    "deaths":"",
    "caseno":""
  }
};


//Ausrtalia has states, so if Australia is chosen, the states select box will show
function show_state(){
  if(document.getElementById('country').value=='1'){
  document.getElementById('state').style.display="block"}
  else if(document.getElementById('country').value=='2'){
    document.getElementById('state').style.display="none";
    console.log("success");}
  };

//Main 'show me' button
function showcase(){
  var _australia = document.getElementById('country').value == '1';
  var state_value = document.getElementById('state').value;
  var _usa = document.getElementById('country').value =='2';

//if user does not enter any country or state, an alert will tell user to enter country
  if (document.getElementById('country').value > 0){
  document.getElementById("hide_count").style.display="block";
  document.getElementsByClassName("_link")[0].style.display="block";
  document.getElementsByClassName("_link")[1].style.display="block";}
  else {alert("Please Enter A Country");}
//Will show information based on what user picks
  if (state_value =='0' && _australia){
    document.getElementById('showcases').innerHTML= australia.aus.caseno;
    document.getElementById("state_name").innerHTML = australia.aus.state;}
  else if (state_value == '1' && _australia){
    document.getElementById('showcases').innerHTML= australia.nt.caseno;
    document.getElementById("state_name").innerHTML = australia.nt.state;}
  else if (state_value == '2' && _australia){
    document.getElementById('showcases').innerHTML= australia.qld.caseno;
    document.getElementById("state_name").innerHTML = australia.qld.state;}
  else if (state_value == '3' && _australia){
    document.getElementById('showcases').innerHTML= australia.vic.caseno;
    document.getElementById("state_name").innerHTML = australia.vic.state;}
  else if (state_value == '4' && _australia){
    document.getElementById('showcases').innerHTML= australia.nsw.caseno;
    document.getElementById("state_name").innerHTML = australia.nsw.state;}
  else if (state_value == '5' && _australia){
    document.getElementById('showcases').innerHTML= australia.wa.caseno;
    document.getElementById("state_name").innerHTML = australia.wa.state;}
  else if (state_value == '6' && _australia){
    document.getElementById('showcases').innerHTML= australia.sa.caseno;
    document.getElementById("state_name").innerHTML = australia.sa.state;}
  else if (state_value == '7' && _australia){
    document.getElementById('showcases').innerHTML= australia.tas.caseno;
    document.getElementById("state_name").innerHTML = australia.tas.state;}
}
//Side Navigation
function opennav(){
if (document.getElementById('insidenav').style.width == '250px')
  {document.getElementById('insidenav').style.width = "0px";
  document.body.style.backgroundColor = "white";}
else {
  document.getElementById('insidenav').style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}
}
