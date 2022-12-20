document.addEventListener('DOMContentLoaded' , ()=>{

const nl = document.querySelector("#navbar__list");
const sections = Array.from(document.querySelectorAll('section'));

for (let i of sections) {
    let l_item = document.createElement('li');
    l_item.innerHTML = `<li> <a href="#${i.id}" data-nav="${i.id}" class="menu__link"> ${i.id} </a> </li>`;
    nl.appendChild(l_item); 
}


// change active section on scrolling

document.onscroll = () => {
    const sections = Array.from(document.querySelectorAll('section'));

    for (let sec of sections) {
        if(sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top <= 150) {
            sec.classList.add('your-active-class');
        }
        else {
            sec.classList.remove('your-active-class');
        }
    }
};
document.getElementById('topBtn').style.visibility = 'hidden';

document.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click',(e) => {
        document.getElementById(item.getAttribute('href').replace("#","")).scrollIntoView({behavior: 'smooth'});
        e.preventDefault();
    })
});

});


// button to scroll to the top of the page
function scroltop() {
    window.scrollTo(0, 0);
}

window.onscroll = ()=> {
    if(window.scrollY > 200) {
        document.getElementById('topBtn').style.visibility = 'visible';
    }
    else{
        document.getElementById('topBtn').style.visibility = 'hidden';
    }
}
