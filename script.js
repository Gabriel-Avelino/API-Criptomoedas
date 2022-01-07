var apikey = {
    key : 'b606efd3-e2ce-415b-8698-d7dc9fb7aa20'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY='+ 
apikey.key)
.then((response)=>{
if(!response.ok) throw new Error ('Erro ao executar a requisição, status ' + response.status);
return response.json();
})
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
    }
})
.catch((error)=> {
    console.error(error.message);
});