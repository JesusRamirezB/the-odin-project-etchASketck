const cuadricula = document.getElementById('cuadricula');
const tamanoValor = document.getElementById('tamanoValor')
const tamanoSlider = document.getElementById('tamanoSlider');
const limpiar = document.getElementById('limpiarCuadricula');

//let cuadriculaTam = tamanoSlider.value;

/* Event Listeners */
tamanoSlider.onmousemove = (evento) => cambiarTamanoValor(evento.target.value);
tamanoSlider.onchange = (e) => cambiarTamano(e.target.value);
limpiar.onclick = () => window.location.reload();



/* Funciones */
function cambiarTamano(valor) {
    cambiarTamanoValor(valor);
    levantarCuadricula(valor);
    refrescarCuadricula(valor);
}

function refrescarCuadricula(valor) {
    limpiarCuadricula();
    levantarCuadricula(valor);
}

function cambiarTamanoValor(valor) {
    tamanoValor.innerHTML = `${valor} x ${valor}`
}

function levantarCuadricula(valor) {
    cuadricula.style.gridTemplateColumns = `repeat(${valor}, 1fr)`;
    cuadricula.style.gridTemplateRows = `repeat(${valor}, 1fr)`;
    for (let i = 0; i < (valor * valor); i++) {
        const cuadro = document.createElement('div');
        cuadro.className = 'cuadro';
        cuadro.addEventListener('mouseover', changeColor);
        cuadricula.appendChild(cuadro);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

function limpiarCuadricula() {
    cuadricula.innerHTML = '';
}

window.onload = () => {
    levantarCuadricula(10)
        //activateButton(DEFAULT_MODE)
}