let button = document.getElementById('button-random-color');
let coresAleatorias = document.getElementsByClassName('color');
let elementoCompleto = document.getElementsByTagName('body')[0]

function gerador() {
    button.addEventListener('click', function () { // function dentro pois é anônima, poderia ficar dentro qnto fora, ou usar
        for (let i = 1; i < coresAleatorias.length; i += 1) {
            let corAleatoria = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            let corAtual = coresAleatorias[i]
            corAtual.style.backgroundColor = corAleatoria;
        }
    })
}
gerador();

localStorage.setItem('color2');
localStorage.setItem('color3');
localStorage.setItem('color4');

