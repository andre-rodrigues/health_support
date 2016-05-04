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