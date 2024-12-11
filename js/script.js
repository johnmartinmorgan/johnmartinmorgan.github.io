// Condicionales y Ciclos
    // 1. Implementar una función que verifique si todos los
    // campos del formulario de contacto están
    // completos, mostrando un mensaje en la consola.

function verificarFormulario(formContacto) {
    const formulario = document.getElementById(formContacto);
    let camposIncompletos = false;
    for (let campo of formulario.elements) {
        if (campo.type !== "submit" && campo.type !== "button" && campo.value.trim() === "") {
            // Si incluso borrando todos los espacios con trim() no queda contenido, el campo está vacío.
            console.log(`El campo "${campo.name || campo.id}" está vacío.`);
            camposIncompletos = true;
        }
    }
    if (!camposIncompletos) {
        console.log("Todos los campos están completos.");
        limpiarCampos(formulario);
    } else {
        console.log("Hay campos incompletos en el formulario.");
        limpiarCampos(formulario);
    }
}
function limpiarCampos(formulario) {
    for (let campo of formulario.elements) {
        if (campo.type !== "submit" && campo.type !== "button") {
            campo.value = "";
        }
    }
}
document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío para pruebas
    verificarFormulario("formContacto");
});

// 2. Crear un ciclo que genere dinámicamente una
// lista de productos disponibles y los muestre en la
// consola

const lista = ["Hoodies", "Camperas", "Jeans", "Beanies"];
lista.forEach(producto => {
    console.log(producto);
});


// Manipulación Básica del DOM y Eventos
    // 1. Implementar un evento click que muestra la
    // descripción ampliada del producto que clickeamos.
    // 2. Crear un listado de productos incluidos en nuestro
    // HTML generado por medio de una función en Js.

// Funciones Modulares
//     1. Crear una función que genere un array de
//     productos y los muestre en la página utilizando
//     una plantilla HTML dinámica.

// Asincronía y Consumo de API REST
//     1. Utilización de fetch para obtener datos de una API
//     pública y mostrarlos en la sección main del HTML.
//     2. Procesar los datos obtenidos de la API para
//     organizarlos en cards, aplicando Flexbox o Grid para
//     mantener la coherencia en el diseño.

// Carrito de compras
//     1. Debemos tener implementado un carrito de
//     compras que permita a los usuarios añadir
//     productos desde las cards, utilizando localStorage
//     y sessionStorage para almacenar la información
//     del carrito.
//     2. Los productos en el carrito se deben poder
//     visualizar, editar (cambiar la cantidad) y eliminar.
//     3. La información debe mantenerse después de
//     recargar la página.