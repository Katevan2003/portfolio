var menu = document.querySelector('.menu');

var portfolio = document.querySelector('.portfolio');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}

menu.addEventListener('click', () => {
    scrollTo(portfolio);
})
