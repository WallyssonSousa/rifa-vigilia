function abrirWhatsapp(){
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var quantidade = document.getElementById('quantidade').value;
    var pagamento = document.getElementById('forma-pagamento').value;
    var url = "https://wa.me/5511940585674?text="

    + "Olá, a paz do senhor!" + "%0a"
    + "Me chamo: " + nome + ", " + "%0a"
    + "Meu número para contato é: " + telefone + ", " + "%0a"
    + "E gostaria de adquirir " + quantidade + " números na rifa," + "%0a"
    + "E a forma de pagamento que eu gostaria é: " + pagamento + "."
    window.open(url, '_blank').focus();
}