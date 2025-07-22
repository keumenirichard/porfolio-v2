
const all=document.getElementById("all");
const web=document.getElementById("web");
const ia=document.getElementById("ia");
const div=document.getElementById("monDiv");
const elements=document.getElementById("elements");
const menu=document.getElementById("menu");
const close=document.getElementById("fa-close");
const hamburger=document.getElementById("fa-bars");

// traitement du formulaire

const form =document.querySelector('.well')
const envoyer=document.querySelector('.btn-primary')
const nom=document.getElementById("name");
const email=document.getElementById("email");
const subject=document.getElementById("subject");
const message=document.getElementById("message");
const verfication=document.getElementById('veriFormulaire');
const regexEmail=/^[a-zA-Z0-9._-]+@[a-z]{2,}\.[a-z]{2,4}$/;
const avis=[]
form.addEventListener('submit', function(e){
   e.preventDefault();
  if(!(regexEmail.test(email.value)) || (nom.value<2) || ( message.value=="")){
     verfication.innerHTML='<i class="fas fa-warning fa-2x"></i> Veuiller remplir correctement les champs!!!'
  }else{
    verfication.innerHTML='<i class="fas fa-check fa-2x"></i> Données enregistrées!!!<h5>Bonjour '+nom.value+ '</h5>'
    avis.push({name:nom.value, email:email.value, subject:subject.value, message:message.value})
  }
   console.log(avis)
})

elements.addEventListener('click', function(e){
   const val= e.target.textContent;

   switch(val){
      case 'All':
         div.innerHTML="<p>Aucun Projet disponible pour le moment...<p/>"
      break;
      case 'Web':
         div.innerHTML="<p>Aucun Projet disponible pour le moment...<p/>"
      break;
      case 'Ai':
        div.innerHTML="<p>Aucun Projet disponible pour le moment...<p/>"
      break;
      default:
          div.innerHTML="<p>Aucun Projet disponible pour le moment...<p/>"

   }
});

hamburger.addEventListener('click',()=>{
    hamburger.style.display='none';
    menu.style.display='block'
});

close.addEventListener('click',()=>{
    menu.style.display='none';
    close.style.display='block'
    hamburger.style.display='block';
});


  

