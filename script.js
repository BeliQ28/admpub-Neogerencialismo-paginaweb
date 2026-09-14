/* =========================================================
   NAVEGACIÓN ENTRE SECCIONES
========================================================= */

function mostrarSeccion(nombre) {

    const secciones = document.querySelectorAll(".seccion, .hero");

    secciones.forEach(seccion => {
        seccion.classList.remove("seccion-activa");
    });

    const destino = document.getElementById(nombre);

    if (destino) {
        destino.classList.add("seccion-activa");

        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }

    cerrarTodosLosModales();
}


/* =========================================================
   CERRAR TODOS LOS MODALES
========================================================= */

function cerrarTodosLosModales() {

    const modales = document.querySelectorAll(".modal");

    modales.forEach(modal => {
        modal.classList.remove("modal-visible");
    });

    document.body.style.overflow = "";

    // Limpiar PDF para que no quede cargado
    const visorPDF = document.getElementById("visorPDF");

    if (visorPDF) {
        visorPDF.src = "";
    }
}


/* =========================================================
   FUNCIÓN GENERAL PARA LAS "X"
========================================================= */

function cerrarModal(id) {

    const modal = document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.remove("modal-visible");

    document.body.style.overflow = "";

    // Si estamos cerrando el modal del PDF,
    // limpiamos el iframe.
    if (id === "modalEnsayo") {

        const visorPDF = document.getElementById("visorPDF");

        if (visorPDF) {
            visorPDF.src = "";
        }
    }
}


/* =========================================================
   DATOS DE LOS INTEGRANTES
========================================================= */

const integrantes = {

    matias: {

        numero: "01",

        nombre: "Tapia Matías",

        carrera: "Administración Pública",

        formacion:
            "Estudiante de Administración Pública con interés en la gestión y modernización del sector público.",

        institucion:
            "Universidad Central del Ecuador",

        softSkills: [
            "Liderazgo",
            "Trabajo en equipo",
            "Comunicación",
            "Responsabilidad"
        ],

        hardSkills: [
            "Administración Pública",
            "Gestión pública",
            "Investigación",
            "Análisis"
        ],

        descripcion:
            "Interesado en comprender cómo las nuevas formas de gestión pueden contribuir a mejorar la eficiencia de las instituciones públicas.",

        foto: "img/matias.jpeg"
    },


    mary: {

        numero: "02",

        nombre: "Pinto Maria",

        carrera: "Administración Pública",

        formacion:
            "Estudiante de Administración Pública interesada en la innovación, tecnología y modernización administrativa.",

        institucion:
            "Universidad Central del Ecuador",

        softSkills: [
            "Creatividad",
            "Adaptabilidad",
            "Comunicación",
            "Trabajo en equipo"
        ],

        hardSkills: [
            "Administración Pública",
            "Tecnología",
            "Investigación",
            "Análisis"
        ],

        descripcion:
            "Interesada en el uso de la tecnología y la innovación para mejorar los procesos y servicios dentro de las instituciones públicas.",

        foto: "img/maria.jpeg"
    },


    deysi: {

        numero: "03",

        nombre: "Nolasco Deysi",

        carrera: "Administración Pública",

        formacion:
            "Estudiante de Administración Pública con interés en la gestión institucional y los procesos gubernamentales.",

        institucion:
            "Universidad Central del Ecuador",

        softSkills: [
            "Organización",
            "Responsabilidad",
            "Empatía",
            "Trabajo en equipo"
        ],

        hardSkills: [
            "Administración Pública",
            "Gestión institucional",
            "Investigación",
            "Análisis"
        ],

        descripcion:
            "Interesada en conocer cómo las herramientas de gestión pueden contribuir al funcionamiento eficiente de las instituciones gubernamentales.",

        foto: "img/deysi.jpeg"
    },


    belinda: {

        numero: "04",

        nombre: "Quilumba Belinda",

        carrera: "Administración Pública",

        formacion:
            "Estudiante de Administración Pública con interés en la gestión pública, tecnología e innovación.",

        institucion:
            "Universidad Central del Ecuador",

        softSkills: [
            "Liderazgo",
            "Creatividad",
            "Comunicación",
            "Organización"
        ],

        hardSkills: [
            "Administración Pública",
            "Diseño web",
            "Investigación",
            "Análisis"
        ],

        descripcion:
            "Interesada en relacionar la Administración Pública con herramientas tecnológicas y nuevas formas de gestión para generar servicios públicos más eficientes.",

        foto: "img/belinda.jpeg"
    }
};


/* =========================================================
   CREAR HABILIDADES
========================================================= */

function crearHabilidades(lista, contenedor) {

    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    lista.forEach(habilidad => {

        const span = document.createElement("span");

        span.textContent = habilidad;

        contenedor.appendChild(span);
    });
}


/* =========================================================
   ABRIR PERFIL
========================================================= */

function abrirPerfil(persona) {

    const integrante = integrantes[persona];

    if (!integrante) {
        return;
    }

    const foto = document.getElementById("fotoPerfil");
    const numero = document.getElementById("numeroPerfil");
    const nombre = document.getElementById("nombrePerfil");
    const carrera = document.getElementById("carreraPerfil");
    const formacion = document.getElementById("formacionPerfil");
    const institucion = document.getElementById("institucionPerfil");
    const softSkills = document.getElementById("softSkills");
    const hardSkills = document.getElementById("hardSkills");
    const descripcion = document.getElementById("descripcionPerfil");

    if (foto) {
        foto.src = integrante.foto;
        foto.alt = integrante.nombre;
    }

    if (numero) {
        numero.textContent = integrante.numero;
    }

    if (nombre) {
        nombre.textContent = integrante.nombre;
    }

    if (carrera) {
        carrera.textContent = integrante.carrera;
    }

    if (formacion) {
        formacion.textContent = integrante.formacion;
    }

    if (institucion) {
        institucion.textContent = integrante.institucion;
    }

    if (descripcion) {
        descripcion.textContent = integrante.descripcion;
    }

    crearHabilidades(integrante.softSkills, softSkills);
    crearHabilidades(integrante.hardSkills, hardSkills);

    const modal = document.getElementById("modalPerfil");

    if (modal) {

        modal.classList.add("modal-visible");

        document.body.style.overflow = "hidden";
    }
}


/* =========================================================
   CERRAR PERFIL
========================================================= */

function cerrarPerfil() {

    cerrarModal("modalPerfil");
}


/* =========================================================
   ENSAYOS
========================================================= */

const ensayos = [

    {
        persona: "Tapia Matías",

        autor: "ENSAYO DE TAPIA MATÍAS",

        titulo:
            "Neogerencialismo: Hospital Público San Gabriel",

        pdf:
            "ensayos/ensayo-matias.pdf"
    },


    {
        persona: "Pinto Maria",

        autor: "ENSAYO DE PINTO MARIA",

        titulo:
            "Neogerencialismo en la Eficiencia y modernización tecnológica",

        pdf:
            "ensayos/ensayo-mary.pdf"
    },


    {
        persona: "Nolasco Deysi",

        autor: "ENSAYO DE NOLASCO DEYSI",

        titulo:
            "Neogerencialismo: Plataforma Gubernamental",

        pdf:
            "ensayos/ensayo-deysi.pdf"
    },


    {
        persona: "Quilumba Belinda",

        autor: "ENSAYO DE QUILUMBA BELINDA",

        titulo:
            "Neogerencialismo: Orientación a resultados y eficiencia en la Administración Pública",

        pdf:
            "ensayos/ensayo-belinda.pdf"
    }

];


/* =========================================================
   ABRIR ENSAYO / PDF
========================================================= */

function abrirEnsayo(indice) {

    const ensayo = ensayos[indice];

    if (!ensayo) {
        return;
    }

    // Elementos del HTML REAL
    const autor = document.getElementById("modalEnsayoAutor");
    const titulo = document.getElementById("modalEnsayoTitulo");
    const pdf = document.getElementById("visorPDF");
    const abrirPDF = document.getElementById("abrirPDF");

    if (autor) {
        autor.textContent = ensayo.autor;
    }

    if (titulo) {
        titulo.textContent = ensayo.titulo;
    }

    if (pdf) {
        pdf.src = ensayo.pdf;
    }

    if (abrirPDF) {
        abrirPDF.href = ensayo.pdf;
    }

    const modal = document.getElementById("modalEnsayo");

    if (modal) {

        modal.classList.add("modal-visible");

        document.body.style.overflow = "hidden";
    }
}


/* =========================================================
   CERRAR ENSAYO
========================================================= */

function cerrarEnsayo() {

    cerrarModal("modalEnsayo");
}


/* =========================================================
   CASO PRÁCTICO
========================================================= */

function abrirCaso() {

    const modal = document.getElementById("modalCaso");

    if (!modal) {
        return;
    }

    modal.classList.add("modal-visible");

    document.body.style.overflow = "hidden";
}


/*
   Esta función adicional la dejamos por compatibilidad
   por si en algún lugar del HTML todavía aparece
   abrirCasoPractico().
*/

function abrirCasoPractico() {

    abrirCaso();
}


/* =========================================================
   CERRAR CASO PRÁCTICO
========================================================= */

function cerrarCasoPractico() {

    cerrarModal("modalCaso");
}


/* =========================================================
   ACTIVIDAD
========================================================= */

function abrirActividad() {

    const modal = document.getElementById("modalActividad");

    if (!modal) {
        return;
    }

    modal.classList.add("modal-visible");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CERRAR ACTIVIDAD
========================================================= */

function cerrarActividad() {

    cerrarModal("modalActividad");
}


/* =========================================================
   RESULTADO DEL MINI JUEGO
========================================================= */

function mostrarResultado(boton) {

    if (!boton) {
        return;
    }

    const resultado = boton.dataset.result;

    if (!resultado) {
        return;
    }

    const botones = boton.parentElement.querySelectorAll("button");

    botones.forEach(btn => {
        btn.disabled = true;
    });

    boton.classList.add("seleccionado");

    const mensaje = document.createElement("div");

    mensaje.className = "resultado-juego";

    mensaje.textContent = resultado;

    boton.parentElement.appendChild(mensaje);
}


/* =========================================================
   CERRAR AL HACER CLICK FUERA DEL CONTENIDO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const modales = document.querySelectorAll(".modal");

    modales.forEach(modal => {

        modal.addEventListener("click", function (evento) {

            /*
               Si el click fue directamente sobre el fondo
               del modal y no sobre su contenido, se cierra.
            */

            if (evento.target === modal) {

                cerrarModal(modal.id);
            }
        });
    });


    /* =====================================================
       TECLA ESC PARA CERRAR CUALQUIER MODAL
    ===================================================== */

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {

            cerrarTodosLosModales();
        }
    });


    /* =====================================================
       ACTIVAR INICIO AL CARGAR LA PÁGINA
    ===================================================== */

    const inicio = document.getElementById("inicio");

    if (inicio) {

        inicio.classList.add("seccion-activa");
    }

});
/* =========================================================
   GALERÍA AUTOMÁTICA
========================================================= */

let indiceGaleria = 0;

let intervaloGaleria;


/* =========================================================
   CAMBIAR IMAGEN
========================================================= */

function mostrarGaleria(indice) {

    const track = document.querySelector(".galeria-track");
    const indicadores = document.querySelectorAll(".indicador");

    if (!track) {
        return;
    }

    const total = document.querySelectorAll(".galeria-slide").length;

    if (total === 0) {
        return;
    }

    // Evitar salir de los límites
    if (indice >= total) {
        indiceGaleria = 0;
    }

    else if (indice < 0) {
        indiceGaleria = total - 1;
    }

    else {
        indiceGaleria = indice;
    }


    // Mover las imágenes
    track.style.transform =
        `translateX(-${indiceGaleria * 100}%)`;


    // Actualizar indicadores
    indicadores.forEach((indicador, i) => {

        indicador.classList.toggle(
            "activo",
            i === indiceGaleria
        );

    });
}


/* =========================================================
   BOTONES ANTERIOR / SIGUIENTE
========================================================= */

function cambiarGaleria(direccion) {

    mostrarGaleria(indiceGaleria + direccion);

    reiniciarGaleriaAutomatica();
}


/* =========================================================
   IR DIRECTAMENTE A UNA IMAGEN
========================================================= */

function irAGaleria(indice) {

    mostrarGaleria(indice);

    reiniciarGaleriaAutomatica();
}


/* =========================================================
   INICIAR GALERÍA AUTOMÁTICA
========================================================= */

function iniciarGaleriaAutomatica() {

    clearInterval(intervaloGaleria);

    intervaloGaleria = setInterval(() => {

        mostrarGaleria(indiceGaleria + 1);

    }, 4000);
}


/* =========================================================
   REINICIAR TEMPORIZADOR
========================================================= */

function reiniciarGaleriaAutomatica() {

    iniciarGaleriaAutomatica();
}


/* =========================================================
   INICIAR CUANDO CARGA LA PÁGINA
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    mostrarGaleria(0);

    iniciarGaleriaAutomatica();

});