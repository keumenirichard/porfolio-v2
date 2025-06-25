const sources=['<div class="col -xs -3"><img src="Images/Capture 1.png" alt=""></div>','<div class="col -xs -3"><img src="Images/Capture 2.png" alt=""></div>','<div class="col -xs -3"><img src="Images/Capture 2.png" alt=""></div>','<div class="col -xs -3"><img src="Images/Capture 2.png" alt=""></div>'];

const all=document.getElementById("all");
const web=document.getElementById("web");
const ia=document.getElementById("ia");
const div=document.getElementById("monDiv");
const elements=document.getElementById("elements");
const menu=document.getElementById("menu");
const close=document.getElementById("fa-close");
const hamburger=document.getElementById("fa-bars");

elements.addEventListener('click', function(e){
   const val= e.target.textContent;

   switch(val){
      case 'All':
         div.innerHTML=sources;
      break;
      case 'Web':
         div.innerHTML=sources[0]+sources[1];
      break;
      case 'Ai':
         div.innerHTML=sources[0]+sources[1]+sources[2];
      break;
      default:
         div.innerHTML=sources;

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

  

