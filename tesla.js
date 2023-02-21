const menuBtn=document.querySelector('.menu-btn');
const menuBtnMobile=document.querySelector('.menu-btn-mobile');
const sidebar=document.querySelector('.sidebar')
const closeBtn=document.querySelector('.close-btn');
const backdrop=document.querySelector('.sidebar-backdrop');
const navbarMenu=document.querySelector('.navbar-menu');


  AOS.init();
 


menuBtn.addEventListener('click',sidebarOpen);
menuBtnMobile.addEventListener('click',sidebarOpen);

function sidebarOpen(){
    sidebar.style.right="0";
   
    backdrop.getElementsByClassName.display="block";
    setTimeout(() =>{
        backdrop.getElementsByClassName.opacity="1";
    },50);

    document.body.classList.add('sidebar-open-body');
    
}
closeBtn.addEventListener('click',() => {
    sidebar.style.right ="-20em";
    backdrop.style.opacity ="0";
    setTimeout(() => {
     backdrop.style.display="none";
    }, 300);
    document.body.classList.remove('sidebar-open-body');
});

const text=document.querySelector('.roof-text');
const roofImg =document.querySelector('.banner-img');

window.addEventListener('scroll', () => {
    if(text.classList.contains('aos-animate')){

    roofImg.classList.add('roof-2');
}else{
    roofImg.classList.remove('roof-2');
}
});