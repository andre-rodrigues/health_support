$(function(){$("#learn_more").on("click",function(){$("#learn_more_content").slideToggle()}),$("form").on("ajax:success",function(){alert("Mensagem enviada com sucesso."),$("form")[0].reset()}).on("ajax:error",function(){alert("Erro ao enviar mensagem.")})});