function prepararMensagem() {
    var telefone = 558199999999;
    var mensagem = document.getElementById("textMensagem").value;
    
    var link = document.getElementById('enviadaOK');
    
    var janela = "https://api.whatsapp.com//send?phone=phone=" + telefone + "&text=" + mensagem;
  
    link.innerHTML = "Tudo certo! Confirme o envio no WhatsApp Web ou Desktop...";
    
    window.open(janela, "_blank");
}