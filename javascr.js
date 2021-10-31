let text = document.querySelectorAll('.dynamique')
let obs = new IntersectionObserver(function (elems) {
    elems.forEach(function (ele) {
        if (ele.intersectionRatio > 0.4) {
            ele.target.style.opacity = 1
        }
    })
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
})

text.forEach(function (target) {
    obs.observe(target)
})