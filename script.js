let button = document.getElementById('button-random-color');
let coresAleatorias = document.getElementsByClassName('color');

function gerador() {
    button.addEventListener('click', function () { // function dentro pois é anônima, poderia ficar dentro qnto fora, ou usar
        for (let i = 1; i < coresAleatorias.length; i += 1) {
            let quaseerrei = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
            let corAtual = coresAleatorias[i]
            corAtual.style.backgroundColor = quaseerrei;
        }
    })
}
gerador();


