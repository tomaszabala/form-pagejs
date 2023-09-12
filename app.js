const btn = document.getElementById("btn-submit");
const contenedorFormulario = document.getElementById("contenedorFormulario");
const formulario = document.getElementById("contact-form");
const contenedorMensaje = document.getElementById("enviadoMsj");
const botonVolverFormulario = document.getElementById("botonVolverFormulario");
const spinner = document.getElementById("spinner");

formulario.addEventListener("submit", async function (event) {
  event.preventDefault();

  const serviceID = "service_h0lf8uh";
  const templateID = "template_v3070vb";

  try {
    contenedorFormulario.classList.add("d-none");
    spinner.classList.remove("d-none");
    await emailjs.sendForm(serviceID, templateID, this);
    setTimeout(() => {
      spinner.classList.add("d-none");
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
    }, 2000);
    formulario.reset();
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
