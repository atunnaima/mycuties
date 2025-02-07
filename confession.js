
//declare
const bgAudio = new Audio('Nathaniel Constantin - A Piece of You (Official Lyric Video).mp3');



// for bg audio
document.addEventListener("DOMContentLoaded", () => {
    bgAudio.loop = true;
    bgAudio.volume = 0.5;

    // try autoplay
    bgAudio.play().catch(() => {
        //if autoplay is block
        document.addEventListener("click", () => {
            bgAudio.play();
        }, { once: true }); // Only triggers once

    });

});

// typing effect
const textAnimator = {
    typeEffect: function(element, speed){
        let text = element.textContent;
        let i = 0;
        element.textContent = '';  // Clear the text before applying text effect or else it will show double
        const typing = setInterval(() =>{
            if(i < text.length){
                element.textContent += text[i];
                i++;
            }else{
                clearInterval(typing);   
            }


        }, speed)
    }
};


const textElement2 = document.querySelector("p.mainEssay");
textAnimator.typeEffect(textElement2, 40);


