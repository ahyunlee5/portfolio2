'use strict';

function showInfoContent() {
  $('.info').on('click', function() {
    $('.infoContent').toggleClass('hidden');
    $('.infoLabel').toggleClass('hidden');
  });
}

function showProjectsContent() {
  $('.projects').on('click', function() {
    $('.projectsContent').toggleClass('hidden');
    $('.projectsLabel').toggleClass('hidden');
  });
}

function showContactContent() {
  $('.contacts').on('click', function() {
    $('.contactsContent').toggleClass('hidden');
    $('.contactsLabel').toggleClass('hidden');
  });
}

function allFunction() {
  showInfoContent();
  showProjectsContent();
  showContactContent();
}

// function carousel() {

// }

// function plusSlides(n){
//     clearInterval(myTimer);
//     if (n < 0){
//       showSlides(slideIndex -= 1);
//     } else {
//      showSlides(slideIndex += 1); 
//     }
//     if (n === -1){
//       myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
//     } else {
//       myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
//     }
//   }

$(allFunction);