//Counter
//When showcounter button is clicked
  $('#showcounter').click(function(){
  var c = new CountUp("showcases",0,0);
  var _australia = $("#country").val()=='1';
  var state_value = document.getElementById('state').value;
  var _usa = $("#country").val()=='2';


  //If select value is 1 , counter will go up to 3123
  if (state_value=='0' && _australia){
    c.update(26808)}
    else if (state_value=='1' && _australia){
    c.update(0)}
    else if (state_value=='2' && _australia){
    c.update(27)}
    else if (state_value=='3' && _australia){
    c.update(991)}
    else if (state_value=='4' && _australia){
    c.update(148)}
    else if (state_value=='5' && _australia){
    c.update(5)}
    else if (state_value=='6' && _australia){
    c.update(0)}
    else if (state_value=='7' && _australia){
    c.update(0)}
    else if (_usa){
    c.update(423516)}
});
