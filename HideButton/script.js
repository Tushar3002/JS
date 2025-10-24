const inp=document.querySelector('input');
const btn=document.querySelector('button');

btn.addEventListener('click',()=>{
    inp.click();

})

inp.addEventListener('change',e=>{
    const file=e.target.files[0];
    if(file){
        btn.textContent=file.name;
    }
})