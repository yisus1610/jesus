function obtenerValor(id) {
    return document.getElementById(id).value.trim();
}

function convertirNumero(id) {
    return parseFloat(obtenerValor(id));
}

function mostrarResultado(idResultado, mensaje, tipo) {
    const elemento = document.getElementById(idResultado);
    elemento.textContent = mensaje;
    elemento.className = "resultado " + tipo;
}

function validarCampos(campos) {
    for (let campo of campos) {
        if (obtenerValor(campo.id) === "") {
            return "El campo " + campo.nombre + " no puede estar vacío.";
        }

        if (isNaN(convertirNumero(campo.id))) {
            return "El campo " + campo.nombre + " debe contener un número válido.";
        }
    }

    return "";
}

function redondear(valor) {
    return Number(valor.toFixed(3));
}

function calcularVelocidad() {
    const error = validarCampos([
        { id: "distanciaVelocidad", nombre: "Distancia" },
        { id: "tiempoVelocidad", nombre: "Tiempo" }
    ]);

    if (error) {
        mostrarResultado("resultadoVelocidad", error, "error");
        return;
    }

    const distancia = convertirNumero("distanciaVelocidad");
    const tiempo = convertirNumero("tiempoVelocidad");

    if (tiempo === 0) {
        mostrarResultado("resultadoVelocidad", "No es posible dividir entre cero. El tiempo debe ser diferente de 0.", "error");
        return;
    }

    const velocidad = distancia / tiempo;
    mostrarResultado("resultadoVelocidad", "Velocidad: " + redondear(velocidad) + " m/s", "correcto");
}

function calcularAceleracion() {
    const error = validarCampos([
        { id: "cambioVelocidad", nombre: "Cambio de velocidad" },
        { id: "cambioTiempo", nombre: "Cambio de tiempo" }
    ]);

    if (error) {
        mostrarResultado("resultadoAceleracion", error, "error");
        return;
    }

    const cambioVelocidad = convertirNumero("cambioVelocidad");
    const cambioTiempo = convertirNumero("cambioTiempo");

    if (cambioTiempo === 0) {
        mostrarResultado("resultadoAceleracion", "No es posible dividir entre cero. El cambio de tiempo debe ser diferente de 0.", "error");
        return;
    }

    const aceleracion = cambioVelocidad / cambioTiempo;
    mostrarResultado("resultadoAceleracion", "Aceleración: " + redondear(aceleracion) + " m/s²", "correcto");
}

function calcularFuerza() {
    const error = validarCampos([
        { id: "masaFuerza", nombre: "Masa" },
        { id: "aceleracionFuerza", nombre: "Aceleración" }
    ]);

    if (error) {
        mostrarResultado("resultadoFuerza", error, "error");
        return;
    }

    const masa = convertirNumero("masaFuerza");
    const aceleracion = convertirNumero("aceleracionFuerza");
    const fuerza = masa * aceleracion;

    mostrarResultado("resultadoFuerza", "Fuerza: " + redondear(fuerza) + " N", "correcto");
}

function calcularTrabajo() {
    const error = validarCampos([
        { id: "fuerzaTrabajo", nombre: "Fuerza" },
        { id: "distanciaTrabajo", nombre: "Distancia" },
        { id: "anguloTrabajo", nombre: "Ángulo" }
    ]);

    if (error) {
        mostrarResultado("resultadoTrabajo", error, "error");
        return;
    }

    const fuerza = convertirNumero("fuerzaTrabajo");
    const distancia = convertirNumero("distanciaTrabajo");
    const angulo = convertirNumero("anguloTrabajo");
    const radianes = angulo * Math.PI / 180;
    const trabajo = fuerza * distancia * Math.cos(radianes);

    mostrarResultado("resultadoTrabajo", "Trabajo: " + redondear(trabajo) + " J", "correcto");
}

function calcularEnergiaCinetica() {
    const error = validarCampos([
        { id: "masaCinetica", nombre: "Masa" },
        { id: "velocidadCinetica", nombre: "Velocidad" }
    ]);

    if (error) {
        mostrarResultado("resultadoCinetica", error, "error");
        return;
    }

    const masa = convertirNumero("masaCinetica");
    const velocidad = convertirNumero("velocidadCinetica");
    const energia = 0.5 * masa * Math.pow(velocidad, 2);

    mostrarResultado("resultadoCinetica", "Energía cinética: " + redondear(energia) + " J", "correcto");
}

function calcularEnergiaPotencial() {
    const error = validarCampos([
        { id: "masaPotencial", nombre: "Masa" },
        { id: "gravedadPotencial", nombre: "Gravedad" },
        { id: "alturaPotencial", nombre: "Altura" }
    ]);

    if (error) {
        mostrarResultado("resultadoPotencial", error, "error");
        return;
    }

    const masa = convertirNumero("masaPotencial");
    const gravedad = convertirNumero("gravedadPotencial");
    const altura = convertirNumero("alturaPotencial");
    const energia = masa * gravedad * altura;

    mostrarResultado("resultadoPotencial", "Energía potencial gravitatoria: " + redondear(energia) + " J", "correcto");
}

function calcularDensidad() {
    const error = validarCampos([
        { id: "masaDensidad", nombre: "Masa" },
        { id: "volumenDensidad", nombre: "Volumen" }
    ]);

    if (error) {
        mostrarResultado("resultadoDensidad", error, "error");
        return;
    }

    const masa = convertirNumero("masaDensidad");
    const volumen = convertirNumero("volumenDensidad");

    if (volumen === 0) {
        mostrarResultado("resultadoDensidad", "No es posible dividir entre cero. El volumen debe ser diferente de 0.", "error");
        return;
    }

    const densidad = masa / volumen;
    mostrarResultado("resultadoDensidad", "Densidad: " + redondear(densidad) + " kg/m³", "correcto");
}

function calcularPresion() {
    const error = validarCampos([
        { id: "fuerzaPresion", nombre: "Fuerza" },
        { id: "areaPresion", nombre: "Área" }
    ]);

    if (error) {
        mostrarResultado("resultadoPresion", error, "error");
        return;
    }

    const fuerza = convertirNumero("fuerzaPresion");
    const area = convertirNumero("areaPresion");

    if (area === 0) {
        mostrarResultado("resultadoPresion", "No es posible dividir entre cero. El área debe ser diferente de 0.", "error");
        return;
    }

    const presion = fuerza / area;
    mostrarResultado("resultadoPresion", "Presión: " + redondear(presion) + " Pa", "correcto");
}

function calcularCargaElectrica() {
    const error = validarCampos([
        { id: "corrienteCarga", nombre: "Corriente eléctrica" },
        { id: "tiempoCarga", nombre: "Tiempo" }
    ]);

    if (error) {
        mostrarResultado("resultadoCarga", error, "error");
        return;
    }

    const corriente = convertirNumero("corrienteCarga");
    const tiempo = convertirNumero("tiempoCarga");
    const carga = corriente * tiempo;

    mostrarResultado("resultadoCarga", "Carga eléctrica: " + redondear(carga) + " C", "correcto");
}

function calcularLeyOhm() {
    const error = validarCampos([
        { id: "corrienteOhm", nombre: "Corriente eléctrica" },
        { id: "resistenciaOhm", nombre: "Resistencia" }
    ]);

    if (error) {
        mostrarResultado("resultadoOhm", error, "error");
        return;
    }

    const corriente = convertirNumero("corrienteOhm");
    const resistencia = convertirNumero("resistenciaOhm");
    const voltaje = corriente * resistencia;

    mostrarResultado("resultadoOhm", "Voltaje: " + redondear(voltaje) + " V", "correcto");
}