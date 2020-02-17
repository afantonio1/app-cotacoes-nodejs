const cotacoesForm = document.querySelector('form');
const erroBusca = document.querySelector('#erro-label');
const symbol = document.querySelector('#symbol');
const preco = document.querySelector('#preco');
const preco_abertura = document.querySelector("#preco_abertura");
const alta_dia = document.querySelector("#alta_dia");
const baixa_dia = document.querySelector("#baixa_dia");
const nomeEmp = document.querySelector("#empresa");

cotacoesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const ativo = document.querySelector('input').value
    const msgErro = '* O ativo deve ser informado.';

    if (!ativo){
        resetCampos();
        erroBusca.innerText = msgErro;
        return;
    }
    else
    {
        erroBusca.innerText = '';
       fetch(`http://localhost:3000/cotacoes?ativo=${ativo}`).then((response) =>{
        response.json().then((data) => {
            if (data.error){
                resetCampos();
                erroBusca.innerHTML = `${data.error.message} || código ${data.error.code}`
            }
            else{
                empresa.innerHTML = `Empresa..: ${data.name}`;
                symbol.innerHTML = `Ativo..: ${data.symbol}`;
                preco.innerHTML = `Preço atual..: R$ ${data.price}`;
                preco_abertura.innerHTML = `Preço de Abertura..: R$ ${data.price_open}`;
                alta_dia.innerHTML = `Maior alta do dia..: R$ ${data.day_high}`;
                baixa_dia.innerHTML = `Maior baixa do dia..: R$ ${data.day_low}`;
            }
        })
        })
    }
})

//Função para limpar os campos
function resetCampos(){
    empresa.innerHTML = '';
    symbol.innerHTML = '';
    preco.innerHTML = '';
    preco_abertura.innerHTML = '';
    alta_dia.innerHTML = '';
    baixa_dia.innerHTML = '';
}