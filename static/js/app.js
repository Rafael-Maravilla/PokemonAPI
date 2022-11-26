/* Elementos del DOM */
const contenedorTarjetas = document.querySelector('#contenedor-tarjetas');
const botonSiguiente = document.querySelector('#siguiente');
const botonAnterior = document.querySelector('#anterior');

/* Instancia de la clase renderizado */
const render = new Renderizado();

/* Eventos del DOM */
botonSiguiente.addEventListener('click', function(){
    render.desde += 9;
    render.hasta += 9;
    contenedorTarjetas.innerHTML = '';
    render.renderizarTarjeta();
    botonAnterior.classList.remove('disabled');
})

botonAnterior.addEventListener('click', function(){
    if(render.hasta===9){
        this.classList.add('disabled');
    }else{
        this.classList.remove('disabled');
        render.desde -= 9;
        render.hasta -= 9;
        contenedorTarjetas.innerHTML = '';
        render.renderizarTarjeta();
    }
})

render.renderizarTarjeta();