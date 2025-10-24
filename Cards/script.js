let form = document.querySelector('form');
let inputs=document.querySelectorAll('input')
let main=document.getElementById('main');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let card=document.createElement('div');
    card.classList.add('card');

    let profile=document.createElement('div');
    profile.classList.add('profile');

    let img=document.createElement('img');
    img.setAttribute('src',inputs[0].value);

    let name=document.createElement('h3');
    name.textContent=inputs[1].value;

    let role=document.createElement('h5');
    role.textContent=inputs[2].value;

    let desc=document.createElement('p');
    desc.textContent=inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(desc);

    main.appendChild(card);
    
    inputs.forEach(input =>{
        if(input.type !== 'submit'){
            input.value='';
        }
    });
})