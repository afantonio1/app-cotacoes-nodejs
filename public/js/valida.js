const validaForm = document.querySelector('#frmContato');

validaForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const nome = document.querySelector('#nome').value
    const sobrenome = document.querySelector('#sobrenome').value
    const email = document.querySelector('#email').value
    const fone = document.querySelector('#fone').value
    const msg = document.querySelector('#mensagem').value

    if(!nome){
        erroNome.innerText = 'O campo nome deve ser preenchido.';
        return;
    }
    else if(!sobrenome){
        erroSobrenome.innerText = 'O Sobrenome é obrigatório.';
        return;
    }
    else if(!email){
        erroEmail.innerText = 'Por favor informe um e-mail válido.';
        return;
    }
    else if(!fone){
        erroFone.innerText = 'Favor informar o telefone de contato.';
        return;
    }
    else if(!msg){
        erroMsg.innerText = 'Por favor, informe a sua mensagem.';
        return;
    }
    else
    {        
        document.getElementById('frmContato').submit();
    }
});