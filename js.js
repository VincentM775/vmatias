var input = []
window.addEventListener("keyup",(event) => {
    input.push(event.key.toLowerCase());
    if(input.join('').includes('alo')){
        document.querySelectorAll("p, a, h2, h1").forEach((element) =>{
            element.innerHTML = "lucas";

        })
    
    }
})

// Code pour le défilement fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

//Code pour le formulaire :

document.querySelector('#all_input').querySelectorAll('.input').forEach((input) => {

    input.addEventListener('input', function() {

        let value = input.value;

        if (value !== '' && value !== null && value !== undefined){
            input.classList.remove('is-danger');
            input.classList.add('is-success');
        } else {
            input.classList.remove('is-success');
            input.classList.add('is-danger');
        }

        let parentElement = input.closest('.field');
        let helpElement = parentElement.querySelector('.help');
        
        let trucRight = parentElement.querySelector('.is-right');
        let icon = trucRight.querySelector('.fas');

        if (input.classList.contains('is-danger')) {
            helpElement.textContent = 'Ce champ est obligatoire';
            helpElement.classList.remove('is-success');
            helpElement.classList.add('is-danger');
            
            icon.classList.remove('fa-check');
            icon.classList.add('fa-exclamation-triangle');
        } else {
            helpElement.textContent = '';
            helpElement.classList.remove('is-danger');
            helpElement.classList.add('is-success'); 

            icon.classList.remove('fa-exclamation-triangle');
            icon.classList.add('fa-check');
        }
    })
})

document.querySelectorAll('.textarea').forEach((textarea) => {
    textarea.addEventListener('input', function() {
        let value = textarea.value;

        if (value !== '' && value !== null && value !== undefined){
            textarea.classList.remove('is-danger');
            textarea.classList.add('is-success');
        } else {
            textarea.classList.remove('is-success');
            textarea.classList.add('is-danger');
        }

        let parentElement = textarea.closest('.field');
        let helpElement = parentElement.querySelector('.help');

        if (textarea.classList.contains('is-danger')) {
            helpElement.textContent = 'Ce champ est obligatoire';
            helpElement.classList.remove('is-success');
            helpElement.classList.add('is-danger');
        } else {
            helpElement.textContent = '';
            helpElement.classList.remove('is-danger');
            helpElement.classList.add('is-success');
        }
    });
});



/*Code pour vérifier si tout les champs sont bien compléter */
function validateForm() {
    let nom = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let sujet = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (nom.trim() === '' || email.trim() === '' || sujet.trim() === '' || message.trim() === '') {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    }

    return true;
}
/*Code pour l'envoi du mail : */
function sendMail(){
    if (!validateForm()) {
        return;
    }
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    console.log();
    const serviceID = "service_o4au2ta";
    const templateID = "template_u0x9lwc";
    
    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Le message a été envoyer avec succès !")
        })
        .catch((err)=> {
            console.log(err);
            alert("Erreur : l'envoie n'a pas fonctionner.");
        });
}
document.getElementById("monFormulaire").addEventListener("submit", function(event){
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
})
