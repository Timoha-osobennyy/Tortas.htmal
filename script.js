function agregarAlCarrito(nombrePastel) {
    alert(nombrePastel + " ha sido agregado al carrito.");
}

document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    this.reset();
});