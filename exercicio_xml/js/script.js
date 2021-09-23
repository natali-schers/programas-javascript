//DEFININDO O CAMINHO DO ARQUIVO DE DADOS XML
let url = "dados/dados.xml";

//UTILIZANDO O JQUERY COM AJAX
$.ajax(url)
    .done(function(xml){
        $(xml)
            .find("contribuinte")
            .each(function(){
                $("#cards").append(`
                <div class="card">
                    <img src="${$(this).find("foto").text()}" class="image-card">
                    <p class="nome">${$(this).find("nome").text()}</p>
                    <p class="cpf">${$(this).find("cpf").text()}</p>
                    <p class="cidade">${$(this).find("cidade").text()}</p>
                    <div class="contato">
                        <p class="celular">${$(this).find("celular").text()}</p>
                        <p class="email">${$(this).find("email").text()}</p>
                    </div>
                </div>
                `);
            });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML");
    });