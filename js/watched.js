const SELECTOR = '.watched';
const ANIMATE_CLASS_NAME = 'animated';

const animat = element => (
  element.classList.add(ANIMATE_CLASS_NAME)
);

const isAnimated = element => (
  element.classList.contains(ANIMATE_CLASS_NAME)
);

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    
    // when element's is in viewport,
    // animate it!
    if (entry.intersectionRatio > 0) {
      animat(entry.target);
      // remove observer after animation
      observer.unobserve(entry.target);
    }
  });
});

// get only these elements,
// which are not animated yet
const elementos = [].filter.call(
  document.querySelectorAll(SELECTOR),
  elementos => !isAnimated(elementos, ANIMATE_CLASS_NAME)
);
//console.log(elements);

// start observing your elements
elementos.forEach((elementos) => intersectionObserver.observe(elementos));