const h1=document.querySelector('h1')

window.addEventListener('keydown',e=>{
    h1.textContent=e.key
})