//Counter
//When showcounter button is clicked
  $('#showcounter').click(function(){
  var c = new CountUp("showcases",0,0);
  var _australia = $("#country").val()=='1';
  var state_value = document.getElementById('state').value;
  var _usa = $("#country").val()=='2';


  //If select value is 1 , counter will go up to 3123
  if (state_value=='0' && _australia){
    c.update(country[0].no_case)}
    else if (state_value=='1' && _australia){
    c.update(country[0].state[0].no_case)}
    else if (state_value=='2' && _australia){
    c.update(country[0].state[1].no_case)}
    else if (state_value=='3' && _australia){
    c.update(country[0].state[2].no_case)}
    else if (state_value=='4' && _australia){
    c.update(country[0].state[3].no_case)}
    else if (state_value=='5' && _australia){
    c.update(country[0].state[4].no_case)}
    else if (state_value=='6' && _australia){
    c.update(country[0].state[5].no_case)}
    else if (state_value=='7' && _australia){
    c.update(country[0].state[6].no_case)}
    else if (_usa){
    c.update(country[1].no_case)}
});
