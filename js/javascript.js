var australia = {
  "nt":{
    "state":"Northern Territory",
    "caseno":"1"
  },
  "qld":{
    "state":"Queensland",
    "caseno":"3"
  },
  "sa":{
    "state":"South Australia",
    "caseno":"21"
  },
  "wa":{
    "state":"Western Australia",
    "caseno":"94"
  },
  "vic":{
    "state":"Victoria",
    "caseno":"4,628"
  },
  "nsw":{
    "state":"New South Wales",
    "caseno":"1,471"
  }
};


function showcase(){
  document.getElementsByClassName("circle")[0].style.display="block";
  if(document.getElementById('state').value == '1' && document.getElementById('country').value == '1'){
    document.getElementById('showcases').innerHTML=australia.nt.caseno; document.getElementById("state_name").innerHTML = australia.nt.state;}
  else if (document.getElementById('state').value == '2' && document.getElementById('country').value == '1'){
    document.getElementById('showcases').innerHTML=australia.qld.caseno; document.getElementById("state_name").innerHTML = australia.qld.state;}
  else if (document.getElementById('state').value == '3' && document.getElementById('country').value == '1'){
    document.getElementById('showcases').innerHTML=australia.vic.caseno; document.getElementById("state_name").innerHTML = australia.vic.state;}
  else if (document.getElementById('state').value == '4' && document.getElementById('country').value == '1'){
    document.getElementById('showcases').innerHTML=australia.nsw.caseno; document.getElementById("state_name").innerHTML = australia.nsw.state;}
  else if (document.getElementById('state').value == '5' && document.getElementById('country').value == '1'){
    document.getElementById('showcases').innerHTML=australia.wa.caseno; document.getElementById("state_name").innerHTML = australia.wa.state;}
  else if (document.getElementById('state').value == '6' && document.getElementById('country').value == '1'){
    document.getElementById('showcases').innerHTML=australia.sa.caseno; document.getElementById("state_name").innerHTML = australia.sa.state;}
}

function opennav(){
if (document.getElementById('insidenav').style.width == '250px')
  {document.getElementById('insidenav').style.width = "0px";
  document.body.style.backgroundColor = "white";}
else {
  document.getElementById('insidenav').style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";}
}
