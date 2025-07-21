
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
const regexName=/^[a-zA-Z0-9]$/;
const avis=[];
form.addEventListener('submit', function(e){
   e.preventDefault();
  if(!(regexEmail.test(email.value)) || !(regexName.test(nom.value)) || ( message.value=="")){
     verfication.innerHTML='<i class="fas fa-warning"></i>Veuiller remplir correctement les champs!!!'
     console.log(message.value)
  }else{
   while(true){
   let i;
   avis.push({nom:'nom.value', email:'email.value', subject:'subject.value', message:'message.value',id:'i'})
   i++;
   }
  }
  console.log(avis)
   
})

elements.addEventListener('click', function(e){
   const val= e.target.textContent;

   switch(val){
      case 'All':
         div.innerHTML="Aucun Projet disponible pour le moment..."
      break;
      case 'Web':
          div.innerHTML="Aucun Projet disponible pour le moment..."
      break;
      case 'Ai':
         div.innerHTML="Aucun Projet disponible pour le moment..."
      break;
      default:
         div.innerHTML="Aucun Projet disponible pour le moment..."

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


  

