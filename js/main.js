const carouselContainer = document.querySelector(".container");

carouselContainer.addEventListener('wheel', (e) => {
    e.preventDefault();

    const propElement  = carouselContainer.querySelector('.img').getBoundingClientRect();
    console.log(carouselContainer.querySelector('.img').getBoundingClientRect());
    const containerScrollAmount = propElement.width ;


    const delta = e.deltaY || e.deltaX;

    if (delta > 0) {
        carouselContainer.scrollLeft += containerScrollAmount; // Adjust the scroll amount as needed
    } else {
        carouselContainer.scrollLeft -= containerScrollAmount; // Adjust the scroll amount as needed
    }
});


// const carousel = document.querySelector('.container');
// const scrollAmount = 300; // Adjust the scroll amount as needed

// carousel.addEventListener('wheel', (e) => {
//     e.preventDefault();

//     // Determine the direction of the scroll
//     const scrollDirection = e.deltaY > 0 ? 1 : -1;

//     // Calculate the target scroll position
//     const targetScrollLeft = carousel.scrollLeft + scrollAmount * scrollDirection;

//     // Use the animate method to smoothly scroll to the target position
//     carousel.animate(
//         { : targetScrollLeft },
//         {
//             duration: 500, // Adjust the duration as needed
//             easing: 'ease', // Adjust the easing function as needed
//             fill: 'both'
//         }
//     );
// });
