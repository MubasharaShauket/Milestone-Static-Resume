var toggleButton = document.getElementById('toggle-Skills') as HTMLButtonElement;
var Skills =document.getElementById('Skills')as HTMLElement
toggleButton.addEventListener('click',()=>{
    if(Skills.style.display==='none'){
        Skills.style.display='block'
    }
    else{
        Skills.style.display='none'
    }
})