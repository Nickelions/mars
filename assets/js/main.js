gsap.registerPlugin(ScrollTrigger);

let textWrapper = document.querySelector('.mars-text')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper2 = document.querySelector('.mars-title')
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='extra-letter'>$&</span>");

let textWrapper3 = document.querySelector('.wiki-text')
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

let textWrapper4 = document.querySelector('.header-title')
textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='extra-letter'>$&</span>");

let textWrapper5 = document.querySelector('.header-sub')
textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


var mql = window.matchMedia('(min-width: 1000px)') ;
var headerSize = mql.matches ? "100vw" : "90vw";
var tl = gsap.timeline();



function openMenu() {
    document.querySelector('body').style.overflow = "hidden";
    gsap.to('.menu-content', {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1
    })
}

function closeMenu() {
    document.querySelector('body').style.overflow = "auto";
    gsap.to('.menu-content', {
        clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        duration: 1
    })
}


tl.to('.header-title', {
    opacity: 1,
});

tl.to('.header-title .extra-letter', {
    color: "#fff",
    opacity: 1,
    stagger: '.05',
    delay: 0.5
});

tl.to('.header-sub .letter', {
    opacity: 0.9,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    stagger: '.02',
});

tl.to('.book-button', {
    opacity: 0.9,
    stagger: '.02',
    delay: 0.2
});


gsap.to(".mars", {
    scrollTrigger: {
        trigger: ".mars",
        toggleActionsw: "restart restart restart restart"
    },
    clipPath: "circle(50% at 50% 50%)",
    duration: 1
});

gsap.to('.mars-text .letter', {
    scrollTrigger: {
        trigger: ".mars-text .letter",
        toggleActionsw: "restart restart restart restart"
    },
    opacity: 0.5,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    stagger: '.05',
});


gsap.to('.info-pill', {
    scrollTrigger: {
        trigger: ".info-pill",
        toggleActionsw: "restart restart restart restart"
    },
    background: "black",
    border: "1px solid #DD381A",
    y: 20,
    opacity: 0.7,
    duration: 1,
    stagger: 0.17,
    delay: 1
})


gsap.to('.mars-title', {
    scrollTrigger: {
    trigger: ".mars-title",
    toggleActionsw: "restart restart restart restart"
},
    opacity:1,
    delay: 2
})


gsap.to('.mars-title .extra-letter', {
    scrollTrigger: {
        trigger: ".mars-title .mars-letter",
        toggleActionsw: "restart restart restart restart"
    },
    fontFamily: 'Rajdhani',
    textAlign : 'left',
    fontSize: '8vw',
    color: '#DD381A',
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    stagger: '.05',
    delay: 2
});

gsap.to('.number', {
    scrollTrigger: {
        trigger: ".number",
        toggleActionsw: "restart restart restart restart"
    },
    opacity: 0.1,
    delay: 2.5
})
gsap.to('.wiki-text .letter', {
    scrollTrigger: {
        trigger: ".wiki-text .letter",
        toggleActionsw: "restart restart restart restart"
    },
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    stagger: '.008',
    delay: 2.5
});

gsap.to('.close-icon', {
    scrollTrigger: {
        trigger: ".close-icon",
        toggleActionsw: "restart restart restart restart"
    },
    opacity: 1,
    x: '85vh',
    rotation: 360,
    duration: '5',
    delay: 3
})

const images = gsap.utils.toArray('.today-image');
images.forEach(image => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            toggleActionsw: "restart pause reverse restart"
        },
        clipPath: "polygon(0 100%, 100% 100%, 100% 2%, 0 2%)",
        ease: " slow( 0.7, 0.7, false)",
        duration: 1
    })
});

const wrappers = gsap.utils.toArray('.mars-today');
wrappers.forEach(wrapper => {
    gsap.to(wrapper, {
        scrollTrigger: {
            trigger: wrapper,
            toggleActionsw: "restart pause reverse restart"
        },
        clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)",
        ease: " slow( 0.7, 0.7, false)",
        duration: 1,
        delay: 0.5
    })
});


const titles = gsap.utils.toArray('.today-title');
titles.forEach(title => {
    gsap.to(title, {
        scrollTrigger: {
            trigger: title,
        },
        opacity: 1,
        duration: 2,
        delay: 1.5
    }); 
});

const texts = gsap.utils.toArray('.today-text');
texts.forEach(text => {
    gsap.to(text, {
        scrollTrigger: {
            trigger: text,
        },
        opacity: 1,
        duration: 1,
        delay: 1.8
    }); 
});

const numbers = gsap.utils.toArray('.today-number');
numbers.forEach(number  => {
    gsap.to(number, {
        scrollTrigger: {
            trigger: number,
            toggleActionsw: "restart restart restart restart"
        },
        opacity: 0.2,
        duration: 3,
        delay: 2
    });
})


const buttons = gsap.utils.toArray('.learn-more');
buttons.forEach(button => {
    gsap.to(button, {
        scrollTrigger: {
            trigger: button,
            toggleActionsw: "restart pause reverse restart"
        },
        clipPath: "polygon(100% 0, 0 0, 0 100%, 88% 100%)",
        duration: 1,
        delay: 1.8
    })
});



const addonImages = gsap.utils.toArray('.addon-image img');
addonImages.forEach(addonImage => {
    gsap.to(addonImage, {
        scrollTrigger: {
            trigger: addonImage,
            toggleActionsw: "restart pause reverse restart"
        },
        opacity: '1',
        duration: 1,
        delay: 1
    })
});

gsap.to('.addon-info', {
    scrollTrigger: {
        trigger: '.addon-info',
        toggleActionsw: "restart pause reverse restart"
    },
    clipPath: 'polygon(0.1% 0, 100% 0, 100% 100%, 0.1% 100%)',
    duration: 1,
    delay: 1.5
});

gsap.to('.swiper-pagination', {
    scrollTrigger: {
        trigger: '.swiper-pagination',
        toggleActionsw: "restart pause reverse restart"
    },
    opacity: '1',
    stagger: '0.5',
    duration: 0.7,
    delay: 1.9
})





