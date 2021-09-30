function initMap() {
  // The location of Uluru
  const uluru = {
    lat: 50.076729,
    lng: 15.921049
  };
  const center = {
    lat: 50.119750,
    lng: 15.865632
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: center,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
// window.addEventListener("scroll", function() {
//   if (window.scrollY > 150) {
//     document.querySelector("#navbar").style.opacity = 0.9;
//   } else {
//     document.querySelector("#navbar").style.opacity = 1;
//   }
// });


// Smooth Scrolling
$("#navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top - 150
      },
      800
    );
    $('.toggler').prop('checked', false);
  }

});

// const SELECTOR = '.watched';
// const ANIMATE_CLASS_NAME = 'animated';

// const animat = element => (
//   element.classList.add(ANIMATE_CLASS_NAME)
// );

// const isAnimated = element => (
//   element.classList.contains(ANIMATE_CLASS_NAME)
// );

// const intersectionObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {

//     // when element's is in viewport,
//     // animate it!
//     if (entry.intersectionRatio > 0) {
//       animat(entry.target);
//       // remove observer after animation
//       observer.unobserve(entry.target);
//     }
//   });
// });

// // get only these elements,
// // which are not animated yet
// const elements = [].filter.call(
//   document.querySelectorAll(SELECTOR),
//   element => !isAnimated(element, ANIMATE_CLASS_NAME)
// );
// //console.log(elements);

// // start observing your elements
// elements.forEach((element) => intersectionObserver.observe(element));