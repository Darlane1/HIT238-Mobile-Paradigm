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
  <a href="${'index'}">Home: Coronavirus Cases</a>
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

//To easily update when information was last entered
let date = {
  day:24,
  month:`September`,
  year:2020,
  saydate(){
    return (`${this.day} ${this.month} ${this.year}`);
  }
};
document.getElementById("as_of").innerHTML = date.saydate();

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
