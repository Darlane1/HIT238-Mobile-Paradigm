function showcase(){
  if(document.getElementById('state').value == '1'){
    document.getElementById('showcases').innerHTML="like 0 lol";}
  else if (document.getElementById('state').value == '2'){
    document.getElementById('showcases').innerHTML="idk maybe 4";}
  else if (document.getElementById('state').value == '3'){
    document.getElementById('showcases').innerHTML="like a lot";}
  else if (document.getElementById('state').value == '4'){
    document.getElementById('showcases').innerHTML="ye idk";}
  else if (document.getElementById('state').value == '5'){
    document.getElementById('showcases').innerHTML="who?";}
  else if (document.getElementById('state').value == '6'){
    document.getElementById('showcases').innerHTML="10,000";}
}

function opennav(){
if (document.getElementById('insidenav').style.width == '250px')
  document.getElementById('insidenav').style.width = "0px";
else {
  document.getElementById('insidenav').style.width = "250px";}
}
