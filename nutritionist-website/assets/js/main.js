/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav-list');
/*===== MENU SHOW ====*/
document.querySelector('.nav-toggle').onclick = () => {
  navMenu.classList.toggle('show-menu');
}

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.home-data',{ delay:250, origin:'right' })
  sr.reveal('.works-img',{ delay:250, origin:'left' })
  sr.reveal('.footer-img',{ delay:150, origin:'left' })
  sr.reveal('.article-data',{ delay:150, origin:'top' })
  sr.reveal('.article-description',{ delay:350, origin:'bottom' })

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current=>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
 document.querySelector('.nav-list a[href*='+ sectionId +']').classList.add('active-link')
  } else {
    document.querySelector('.nav-list a[href*='+ sectionId +']').classList.remove('active-link')
  }
  })
}
