
   (function(){
      emailjs.init({
        publicKey: "B1z8GVT3zwB-fq_NK",
      });
   })();

   
   window.onload = function() {
       document.getElementById('contact-form').addEventListener('submit', function(event) {
           event.preventDefault(); // Impede o envio tradicional do formulário

           // Substitua pelos seus Service ID, Template ID e Public Key
           const serviceID = 'service_b9vl69h';
           const templateID = 'template_8caws8j';

           // emailjs.sendForm(serviceID, templateID, form, publicKey)
           emailjs.sendForm(serviceID, templateID, this)
               .then(() => {
                   alert('E-mail enviado com sucesso!');
                   // Opcional: resetar o formulário
                   document.getElementById('contact-form').reset();
               }, (err) => {
                   alert('Falha ao enviar e-mail:', JSON.stringify(err));
               });
       });
   }