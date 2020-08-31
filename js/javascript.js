var australia = {
  "nt":{
    "state":"Northern Territory",
    "caseno":"0"
  },
  "qld":{
    "state":"Queensland",
    "caseno":"27"
  },
  "sa":{
    "state":"South Australia",
    "caseno":"1"
  },
  "wa":{
    "state":"Western Australia",
    "caseno":"5"
  },
  "vic":{
    "state":"Victoria",
    "caseno":"2,620"
  },
  "nsw":{
    "state":"New South Wales",
    "caseno":"174"
  },
  "tas":{
    "state":"Tasmania",
    "caseno":"1"
  }
};
function show_state(){
  if(document.getElementById('country').value='1'){
  document.getElementById('state').style.display="block"}
}

function showcase(){
  var _australia = document.getElementById('country').value == '1';
  var state_value = document.getElementById('state').value ;
  document.getElementById("hide_count").style.display="block";
  document.getElementsByClassName("_link")[0].style.display="block";
  document.getElementsByClassName("_link")[1].style.display="block";
  if(state_value == '1' && _australia){
    document.getElementById('showcases').innerHTML= australia.nt.caseno; document.getElementById("state_name").innerHTML = australia.nt.state;}
  else if (state_value == '2' && _australia){
    document.getElementById('showcases').innerHTML= australia.qld.caseno; document.getElementById("state_name").innerHTML = australia.qld.state;}
  else if (state_value == '3' && _australia){
    document.getElementById('showcases').innerHTML= australia.vic.caseno; document.getElementById("state_name").innerHTML = australia.vic.state;}
  else if (state_value == '4' && _australia){
    document.getElementById('showcases').innerHTML= australia.nsw.caseno; document.getElementById("state_name").innerHTML = australia.nsw.state;}
  else if (state_value == '5' && _australia){
    document.getElementById('showcases').innerHTML= australia.wa.caseno; document.getElementById("state_name").innerHTML = australia.wa.state;}
  else if (state_value == '6' && _australia){
    document.getElementById('showcases').innerHTML= australia.sa.caseno; document.getElementById("state_name").innerHTML = australia.sa.state;}
  else if (state_value == '7' && _australia){
    document.getElementById('showcases').innerHTML= australia.tas.caseno; document.getElementById("state_name").innerHTML = australia.tas.state;}
}

function opennav(){
if (document.getElementById('insidenav').style.width == '250px')
  {document.getElementById('insidenav').style.width = "0px";
  document.body.style.backgroundColor = "white";}
else {
  document.getElementById('insidenav').style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}
}
