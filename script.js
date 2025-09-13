// Función para obtener el valor del input
const obtenerValorInput = () => {
    let inputTexto = document.getElementById("input_digimon");
    let valor = inputTexto.value.toLowerCase();
    peticionAPI(valor);
}

// Petición a la API 
const peticionAPI = (digimon) => {
    const baseUrl = "https://digi-api.com/api/v1/digimon/";
    const url = `${baseUrl}${digimon}`;

    axios.get(url)
    .then(respuesta => printData(respuesta.data))
    .catch(err => {
        console.log(err);
    });
}

// Mostrar datos en HTML
const printData = (data) => {
    let respuesta = document.getElementById('show-info');
    respuesta.innerHTML = `     
        <div class="card">
            <div class="name">
                <h3>${data.name}</h3>
            </div>
            <div class="img">
                <img src="${data.images[0].href}" width="150"/>
            </div>
            <div class="card-content">
                <div class="level">
                    <p><strong>Nivel:</strong> ${data.levels[0].level}</p>
                </div>
                <div class="adicional">
                    <div class="campo">
                        <img src="${data.fields[0].image}" width="50"/>
                    </div>
                    <div class="otros">
                        <p><strong>Tipo:</strong> ${data.types[0].type}</p>
                        <p><strong>Atributo:</strong> ${data.attributes[0].attribute}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    let respuesta2 = document.getElementById('info-adicional');
    respuesta2.innerHTML = `  
    <div class="card">
        <div class="skills">
            <p><strong>Habilidad:</strong> ${data.skills[0].skill}</p>
        </div>
        <div class="evolucion">
            <h4>Evolución</h4>
        </div>
        <div class="img2">
                <img src="${data.nextEvolutions[0].image}" width="166"/>
        </div>
        <div class="NomEvolucion">
            <h4>${data.nextEvolutions[0].digimon}</h4>
        </div>
    </div>
    `
    let respuesta3 = document.getElementById('pEvol');
    respuesta3.innerHTML = `
    <div class="PreEvol">
        <div class="img3">
            <img src="${data.priorEvolutions[0].image}" width="130"/>
        </div> 
        <div class="NomPreEvolucion">
            <h4>${data.priorEvolutions[0].digimon}</h4>
        </div>
    </div> 
    <div class="PreEvol">
        <div class="img3">
            <img src="${data.priorEvolutions[1].image}" width="130"/>
        </div> 
        <div class="NomPreEvolucion">
            <h4>${data.priorEvolutions[1].digimon}</h4>
        </div>
    </div> 
    `
    let respuesta4 = document.getElementById('descripcion');
    respuesta4.innerHTML = `
    <div class="descripcion-digimon">
        <p> ${data.descriptions[1].description}</p>
    </div> 
    `
}