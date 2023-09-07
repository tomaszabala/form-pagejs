const btn = document.getElementById("btn-submit");
const contenedorFormulario = document.getElementById("contenedorFormulario");
const formulario = document.getElementById("contact-form");
const contenedorMensaje = document.getElementById("enviadoMsj");
const botonVolverFormulario = document.getElementById("botonVolverFormulario");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const serviceID = "service_m7t9lj7";
  const templateID = "template_bvnk0t5";

  try {
    await emailjs.sendForm(serviceID, templateID, this);
    contenedorFormulario.classList.add("d-none");
    contenedorMensaje.classList.remove("d-none");
    contenedorMensaje.classList.add(
      "container",
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "fluid",
      "p-0",
      "m-0"
    );
    document.body.appendChild(contenedorMensaje);
  } catch (error) {
    console.log("FAILED...", error);
  }
});

botonVolverFormulario.addEventListener("click", () => {
  contenedorFormulario.classList.remove("d-none");
  contenedorMensaje.classList.remove(
    "container",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "fluid",
    "p-0",
    "m-0"
  );
  contenedorMensaje.classList.add("d-none");
});
