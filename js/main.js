
/*ANIMATE SWIPE*/
const animItems = document.querySelectorAll('.animate__up, .animate__left, .animate__right');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (var i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset =offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animate__active');
            } else{
                if (!animItem.classList.contains('animate__no-hide')) {
                    animItem.classList.remove('animate__active');
                }
            }


        }
    }
}

function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXoffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

setTimeout(() => {
    animOnScroll();
}, 300)




