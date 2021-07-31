window.addEventListener('scroll',function(){
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle("sticky", window.scrollY > 0)
});



const showM = document.querySelector(".showMore");

showM.addEventListener('click', () =>{
    document.getElementById("project5").style.display = "flex";
    document.getElementById("project6").style.display = "flex";
    document.getElementById("showMore").style.display = "none";
    document.getElementById("showLess").style.display = "flex";
})


const showL = document.querySelector(".showLess");
showL.addEventListener('click', () =>{
    document.getElementById("project5").style.display = "none";
    document.getElementById("project6").style.display = "none";
    document.getElementById("showMore").style.display = "flex";
    document.getElementById("showLess").style.display = "none";
})



const text = baffle(".name");
text.set({
    characters: '░▒▓ ▓▒<██ ▒░█▒> ▒// <<▒/< █░▓█ ░▒░ ▓▒▓░ <▒▓█',
    speed: 120
});
text.start();
text.reveal(4000);


VANTA.TOPOLOGY({
    el: "#background-img",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 2100.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xfff,
    backgroundColor: 0x050d1a
  })


  const mobileBtn = document.getElementById('mobile-cta');
  const nav = document.querySelector('nav');
  const mobileBtnExit = document.getElementById('mobile-exit');
  
  mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
  })
  
  mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
  })
 
  