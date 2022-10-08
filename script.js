let button = document.getElementById('button-random-color');
const coresAleatorias = document.getElementsByClassName('color');
let preto = document.getElementsByClassName('color selected');
let corpreta1
coresAleatorias[0].style.backgroundColor = 'black';
coresAleatorias[1].style.backgroundColor = 'yellow';
coresAleatorias[2].style.backgroundColor = 'blue';
coresAleatorias[3].style.backgroundColor = 'red';

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



document.addEventListener('click', function (choice) { 
    if (choice.target.classList.contains('pixel')) { 
        let preto = document.getElementsByClassName('color selected')[0].style.backgroundColor;
        choice.target.style.backgroundColor = preto;
    }

    if (choice.target.classList.contains('color')) {
        for (let index1 of coresAleatorias) {
            index1.className = 'color';
        }
        choice.target.className = `${choice.target.className} selected`;
    }
    if (choice.target.id === 'clear-board') { 
        let pixelsBoard = document.getElementsByClassName('pixel');
        for(let i3 of pixelsBoard) {
            i3.style.backgroundColor =`rgb(255,255,255)`;
        }
    }
});





