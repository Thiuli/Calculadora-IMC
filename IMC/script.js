//IMC
//1. Capturar valores
//2. calcular o IMC
//3.gerar classificação
//4.organizar as informações
//5.salvar os dados na lista
//6.ler a lista com os dados
//7.Renderizar o conteúdo no HTML (tabela)
//8.Botão de çlimpar os registros (clear(localStorage))






function CapturarValores() {
    const nome = document.getElementById('name').Value;
    const altura = document.getElementById('Height').Value;
    const peso = document.getElementById('weight').value;

}

const dadosUsuario = {
    nome: nome,
    altura: altura,
    peso: peso,
}

return dadosUsuario;

function CalcularImc (altura, peso) {
    const imc = peso/ (altura * altura)
    return imc
}

function ClassificarImc(imc){
    if(imc <18.5){
        return "Abaixo do peso!"
} else if (imc <25){
    return "peso normal!"
} else if (imc < 30){
    return "Acima do peso!"
} else{
    return "obesidade!"
}
}

function OrganizarDados (dadosUsuario, valorImc, ClassificacaoImc) {
    const dataHoraAtual = Intl.DateTimeFormat('pt-br', {timeStyle: 'long',dateStyle:"short"}).format(Date.now());

    const dadosUsuarioComplete = {
    ...dadosUsuario,
    imc:valorImc.toFixed(2),
    ClassificacaoImc: ClassificacaoImc,
    dataCadastro: dataHoraAtual}

    return
    }

