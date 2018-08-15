// anime({
//   targets: 'div',
//   translateX: [
//     { value: 100, duration: 1200 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: '1turn',
//   backgroundColor: '#F7D9FF',
//   duration: 4000,
//   loop: true
// });


var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

const consoleStyle = "color:#d3c4e0; font-size:36px; text-shadow: 0px 2px 1px #8F8699; font-family: 'Source Code Pro', monospace; $letterSpacing: 16px;"

console.log("%chi. i'm roxy. let's build!" , consoleStyle);

document.addEventListener('DOMContentLoaded', function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
