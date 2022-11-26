class Renderizado{
    constructor(){
        this.desde = 1;
        this.hasta = 9;
    }

    consumirAPI(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json() )
        .then((data) => {
            contenedorTarjetas.innerHTML += `<div class="card tarjeta"  style="width: 18rem;">
                                                <div class="card-head">
                                                    <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
                                                </div>
                                                <div class="card-body">
                                                <h5 class="card-title">${data.forms[0].name} </h5>
                                                <p class="card-text">Experiencia: ${data.base_experience}</p>
                                                <p class="card-text">Estadística: ${data.stats[0].base_stat}</p>
                                                <p class="card-text">Peso: ${data.weight}</p>
                                                </div>
                                            </div>`;
        })
    }

    renderizarTarjeta() {
        for (let i = this.desde; i <= this.hasta; i++) {
            this.consumirAPI(i);    
        } 
    }
    

}

