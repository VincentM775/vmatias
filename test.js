function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    const serviceID = "service_o4au2ta";
    const templateID = "template_u0x9lwc";
    
    emailjs
        .send(serviceID,templateID,params)
        .then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Le message a été envoyer avec succès !")
        })
        .catch((err)=> {
            console.log(err);
            alert("Erreur : l'envoie n'a pas fonctionner.");
        });
}
