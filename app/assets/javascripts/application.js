// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_self

$(function() {

  // Show learn more message
  $("#learn_more").on("click", function() {
    $("#learn_more_content").slideToggle();
  });

  // Show message after form submission and clear form
  $("form").on("ajax:success", function() {
    alert("Mensagem enviada com sucesso.");
    $("form")[0].reset();
  }).on("ajax:error", function(e, xhr, status, error) {
    alert("Erro ao enviar mensagem.");
  });

});