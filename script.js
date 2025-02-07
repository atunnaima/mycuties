// slide out effect

//declare
const image = document.querySelector('.bear img');
const popOut = document.querySelector('.popOut');
const mainCon = document.querySelector('.main_con');
const nButton = document.querySelector('.b2');  
const yButton = document.querySelector('.b1');  
const nAudio = new Audio('AAAAUUUGHHHH.mp3');

image.addEventListener('click', () =>{
    //add slide out effect to mainCon
    mainCon.classList.add('slideOut');
    
    // Wait for the slide-out animation to finish before showing popOut
    setTimeout(() => {
        // Now display the popOut and apply fade-in effect
        popOut.style.display = 'flex';   // Show popOut
        setTimeout(() => {
            popOut.style.opacity = 1;  // Fade in popOut
            popOut.style.transform = 'translateY(0)';  // Slide in
        }, 50);  // Short delay before starting popOut animation
    }, 20); // when to finish
});

//no button
nButton.addEventListener('click', () => {
    nAudio.play(); //play sound WHEN THE USER CLICK NO
    
    nButton.style.transition = 'opacity 0.5s ease';
    nButton.style.opacity = '0';

    setTimeout(() => {
        nButton.style.visibility = 'hidden'; // dont use none, the yes button will disappear half
        yButton.style.transition = 'transform 0.5s ease'; 
        yButton.style.transform = 'translateX(87px)'; // Moves box up smoothly        }, 300);   
    }, 100);

});

// yes button
yButton.addEventListener('click', () => {
    document.body.style.transition = "opacity 0.7s ease"; //smooth fade out
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "confession.html"; // redirect to next page

    }, 300); 

});





