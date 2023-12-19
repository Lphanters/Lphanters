document.addEventListener("DOMContentLoaded", function () {
  const mostrarModalCookies = document.getElementById("mostrarModalCookies");
  const mostrarModalLegal = document.getElementById("mostrarModalLegal");
  const mostrarModalDatos = document.getElementById("mostrarModalDatos");

  const modalCookies = document.getElementById("modalCookies");
  const modalLegal = document.getElementById("modalLegal");
  const modalDatos = document.getElementById("modalDatos");

  const aceptarCookies = document.getElementById("aceptarCookies");
  const rechazarCookies = document.getElementById("rechazarCookies");
  const cerrarLegal = document.getElementById("cerrarLegal");
  const cerrarDatos = document.getElementById("cerrarDatos");

  function mostrarModal(modal) {
    modal.style.display = "flex";
  }

  function ocultarModal(modal) {
    modal.style.display = "none";
  }

  mostrarModalCookies.addEventListener("click", function (event) {
    event.preventDefault();
    mostrarModal(modalCookies);
  });

  mostrarModalLegal.addEventListener("click", function (event) {
    event.preventDefault();
    mostrarModal(modalLegal);
  });

  mostrarModalDatos.addEventListener("click", function (event) {
    event.preventDefault();
    mostrarModal(modalDatos);
  });

  aceptarCookies.addEventListener("click", function () {
    ocultarModal(modalCookies);
  });

  rechazarCookies.addEventListener("click", function () {
    ocultarModal(modalCookies);
  });

  cerrarLegal.addEventListener("click", function () {
    ocultarModal(modalLegal);
  });

  cerrarDatos.addEventListener("click", function () {
    ocultarModal(modalDatos);
  });
});
