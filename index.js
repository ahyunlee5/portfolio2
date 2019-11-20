'use strict';

function showInfoContent() {
  $('.info').on('click', function() {
    $('.infoContent').toggleClass('hidden');
  })
}

function allFunction() {
  showInfoContent();
}

$(allFunction)