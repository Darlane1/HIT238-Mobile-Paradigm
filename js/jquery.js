//Counter
//When showcounter button is clicked
  $('#showcounter').click(function(){
  var c = new CountUp("showcases",0,0);
  var _australia = $("#country").val()=='1';
  var state_value = document.getElementById('state').value;
  var country_value = $("#country").val();


  //lots of if statements and will show numer of cases from the data in javascript.js
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

    else if (country_value=='2'){
    c.update(country[1].no_case)}
    else if (country_value=='3'){
    c.update(country[2].no_case)}
    else if (country_value=='4'){
    c.update(country[3].no_case)}
    else if (country_value=='5'){
    c.update(country[4].no_case)}
    else if (country_value=='6'){
    c.update(country[5].no_case)}
    else if (country_value=='7'){
    c.update(country[6].no_case)}
    else if (country_value=='8'){
    c.update(country[7].no_case)}
    else if (country_value=='9'){
    c.update(country[8].no_case)}
    else if (country_value=='10'){
    c.update(country[9].no_case)}
    else if (country_value=='11'){
    c.update(country[10].no_case)}
});
