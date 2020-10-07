import { CountUp } from '/libraries/countUp.min.js';
window.onload = function() {
  var countUp = new CountUp('target', 2000);
  countUp.start();
};
let demo = new CountUp('count_anim', 6969);
if (!demo.error) {
  demo.start();
} else {
  console.error(demo.error);
};
