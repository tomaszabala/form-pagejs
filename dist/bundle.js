(()=>{document.getElementById("btn-submit");const e=document.getElementById("contenedorFormulario"),t=document.getElementById("contact-form"),n=document.getElementById("enviadoMsj"),s=document.getElementById("botonVolverFormulario"),d=document.getElementById("spinner");t.addEventListener("submit",(async function(s){s.preventDefault();try{e.classList.add("d-none"),d.classList.remove("d-none"),await emailjs.sendForm("service_m7t9lj7","template_bvnk0t5",this),setTimeout((()=>{d.classList.add("d-none"),n.classList.remove("d-none"),n.classList.add("container","d-flex","justify-content-center","align-items-center","fluid","p-0","m-0"),document.body.appendChild(n)}),2e3),t.reset()}catch(e){console.log("FAILED...",e)}})),s.addEventListener("click",(()=>{e.classList.remove("d-none"),n.classList.remove("container","d-flex","justify-content-center","align-items-center","fluid","p-0","m-0"),n.classList.add("d-none")}))})();