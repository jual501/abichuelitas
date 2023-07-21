


//1
document.querySelector(".w").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('1.ogg');
    mySound.play();
});

document.querySelector(".w").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});

//2
document.querySelector(".a").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('2.ogg');
    mySound.play();
});

document.querySelector(".a").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});
//3
document.querySelector(".s").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('3.ogg');
    mySound.play();
});

document.querySelector(".s").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});
//4
document.querySelector(".d").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('4.ogg');
    mySound.play();
});

document.querySelector(".d").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});
// 5
document.querySelector(".j").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('bobby.ogg');
    mySound.play();
});

document.querySelector(".j").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});

//6
document.querySelector(".k").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('bobby.ogg');
    mySound.play();
});

document.querySelector(".k").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});

//7
document.querySelector(".l").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('santi.amr');
    mySound.play();
});

document.querySelector(".l").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});
//8
document.querySelector(".x").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('bobby.ogg');
    mySound.play();
});

document.querySelector(".x").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});









//9

document.querySelector(".z").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('2.gif')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('titas.ogg');
    mySound.play();
});

document.querySelector(".z").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('2.gif')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});

//10
document.querySelector(".p").addEventListener("touchstart", function () {
    // Change background image to "1.png"
    document.body.style.backgroundImage = "url('a3.ng')";

    // Add pressed class to elements
    this.classList.add("pressed");


    // Play audio
    let mySound = new Audio('bobby.ogg');
    mySound.play();
});

document.querySelector(".p").addEventListener("touchend", function () {
    // Change background image back to original ("a1.png")
    document.body.style.backgroundImage = "url('a1.png')";

    // Remove pressed class from elements
    this.classList.remove("pressed");

});


let mySound = null;
let isPlaying = false;

document.querySelector("body").addEventListener("click", function () {
    if (!isPlaying) {
        isPlaying = true;

        if (mySound && !mySound.paused) {
            mySound.pause();
            mySound.currentTime = 0;
        }

        mySound = new Audio('main3.mp3');
        mySound.play();

        mySound.addEventListener("ended", function () {
            isPlaying = false;
        });
    }
});

