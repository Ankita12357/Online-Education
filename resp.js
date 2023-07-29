bargar= document.querySelector('.bargar')
navbar= document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightnav=document.querySelector('.right-nav')

bargar.addEventListener('click',()=>{
    
    rightnav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
});