
$('.center').slick({
  centerMode: true,
  arrows:false,
  dots:false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  loop:true,
  margin:0,
  padding:0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        margin:0,
        padding:0,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        margin:0,
        padding:0,
        slidesToShow: 1
      }
    }
  ]
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// $(document).ready(function(){
//   $('.footer-cont-col__title').click(function(event)
//   {
//     if ($('.footer__block').hasClass('one')) {
//       $('.footer-cont-col__title').not($(this)).removeClass('active');
//       $('.footer-text').not($(this).next()).slideUp(300);
//     }
//     $(this).toggleClass('active').next().slideToggle(300);
//   });
// });