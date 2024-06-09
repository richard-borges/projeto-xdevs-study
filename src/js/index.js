const btnAvancar = document.getElementById('btn-avancar');

const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');

btnAvancar.addEventListener('click', function() {
    const ehPrimeiroCartao = cartaoAtual === cartoes.length - 1;
    if(ehPrimeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
})

btnVoltar.addEventListener('click', function() {

    const ehUltimoCartao = cartaoAtual === 0;
    if(ehUltimoCartao) return;

    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
    
    cartaoAtual--;
    mostrarCartao();

})

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
