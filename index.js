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
  })
}

function allFunction() {
  showInfoContent();
  showProjectsContent();
}

$(allFunction)