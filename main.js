// open and close nav

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");


//open sidebar

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// close sidebar

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})

// change active class to clicked nav item

const navItems = document.querySelectorAll('nav ul li');

//remove ative class from other items

const removeActiveClass = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

//add active class to clicked nav item
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        removeActiveClass();
        link.classList.add('active');
    })
})

// show and hide faqs

const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})

// change navbar style on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})