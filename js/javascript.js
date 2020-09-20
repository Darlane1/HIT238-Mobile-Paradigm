var date = {
  "day":"20",
  "month":"September",
  "year":"2020",
  "date":function(){
    return this.day + " " + this.month + " " + this.year;
  }
}
var country = {
	"australia": {
		"aus": {
			"state": "Australia",
			"deaths": "832",
			"caseno": "26,808"
		},
		"nt": {
			"state": "Northern Territory",
			"deaths": "0",
			"caseno": "0"
		},
		"qld": {
			"state": "Queensland",
			"deaths": "6",
			"caseno": "27"
		},
		"sa": {
			"state": "South Australia",
			"deaths": "4",
			"caseno": "0"
		},
		"wa": {
			"state": "Western Australia",
			"deaths": "9",
			"caseno": "5"
		},
		"vic": {
			"state": "Victoria",
			"deaths": "745",
			"caseno": "991"
		},
		"nsw": {
			"state": "New South Wales",
			"deaths": "52",
			"caseno": "148"
		},
		"tas": {
			"state": "Tasmania",
			"deaths": "13",
			"caseno": "0"
		}
  },
		"usa": {
			"usa": {
				"state": "United States of America",
				"deaths": "423",
				"caseno": "423516"
			}
		}
	};
x = date.date();
document.getElementById("as_of").innerHTML = x;

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

//if user does not enter any country or state, an alert will tell user to enter country
  if (document.getElementById('country').value > 0){
  document.getElementById("hide_count").style.display="block";
  document.getElementsByClassName("_link")[0].style.display="block";
  document.getElementsByClassName("_link")[1].style.display="block";}
  else {alert("Please Enter A Country");}
//Will show information based on what user picks
  if (state_value =='0' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.aus.caseno;
    document.getElementById("state_name").innerHTML = country.australia.aus.state;}
  else if (state_value == '1' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.nt.caseno;
    document.getElementById("state_name").innerHTML = country.australia.nt.state;}
  else if (state_value == '2' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.qld.caseno;
    document.getElementById("state_name").innerHTML = country.australia.qld.state;}
  else if (state_value == '3' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.vic.caseno;
    document.getElementById("state_name").innerHTML = country.australia.vic.state;}
  else if (state_value == '4' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.nsw.caseno;
    document.getElementById("state_name").innerHTML = country.australia.nsw.state;}
  else if (state_value == '5' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.wa.caseno;
    document.getElementById("state_name").innerHTML = country.australia.wa.state;}
  else if (state_value == '6' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.sa.caseno;
    document.getElementById("state_name").innerHTML = country.australia.sa.state;}
  else if (state_value == '7' && _australia){
    document.getElementById('showcases').innerHTML = country.australia.tas.caseno;
    document.getElementById("state_name").innerHTML = country.australia.tas.state;}

  if (_usa){
    document.getElementById('showcases').innerHTML = country.usa.usa.caseno;
    document.getElementById("state_name").innerHTML = country.usa.usa.state;
  }
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
