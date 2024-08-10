let main = document.querySelector('.main');
let LoginLink = document.querySelector('.login-link');
let RegisterLink = document.querySelector('.register-link');
let btnpopup = document.querySelector('.btnLogin-popup');
let iconClose = document.querySelector('.icon-close');


RegisterLink.addEventListener('click', ()=>{
    main.classList.add('active');
});
  
  
LoginLink.addEventListener('click', ()=>{
    main.classList.remove('active');
});
  
  
btnpopup.addEventListener('click', ()=>{
    main.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    main.classList.remove('active-popup');
});
  