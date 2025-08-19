// const benefitsNumbers = document.querySelectorAll(".benefits__number");

// benefitsNumbers.forEach(number => {
//     number.addEventListener('click', function () {
//         console.log('Button Clicked');
//     });
// });


// document.getElementById('benefits-number').addEventListener('click', function () {
//     this.style.color = 'red';
// });


// Display onClick
let display = false;

document.querySelector('.benefits__item--01').addEventListener('click', function () {
    const iconOriginal = document.getElementById('benefits__icon-original');
    const iconActive = document.getElementById('benefits__icon-active');

    if (display) {
        iconOriginal.style.display = 'inline-block';
        iconActive.style.display = 'none';
    } else {
        iconOriginal.style.display = 'none';
        iconActive.style.display = 'inline-block';
    }

    display = !display; // Alternar estado
});
