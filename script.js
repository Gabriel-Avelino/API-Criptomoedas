var apikey = {
    key : 'b606efd3-e2ce-415b-8698-d7dc9fb7aa20'
} //Aqui pegamos a chave pertencente a minha conta no Coin Market Cap.

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+ //Aqui fazemos uma requisição nas informações do site.
apikey.key)
.then((response)=>{
    if(!response.ok) throw new Error ('Erro ao executar a requisição, status ' + response.status);
    return response.json();
}) //Pedimos um retorno da requisição, se não tivermos, disparamos um erro.
.then((api)=> {
    var texto = "";
    for(let i = 0; i < 10; i++){
        texto = texto + `
        <div class="media">
            <img src="./img/bitcoin.png" class="aling-self-center mr3" alt="coin" width="60" height="60">
            <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
            </div>
        </div>`

        document.getElementById("coins").innerHTML = texto
    };
}) //Aqui adicionamos todos os dados que conseguimos extrair em nossa requisição e adicionamos nossas imagens.
.catch((error)=> {
    console.error(error.message);
}); //Aqui temos um catch, caso ocorra um erro.