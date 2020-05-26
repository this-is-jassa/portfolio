
const cursor = document.getElementsByClassName('cursor');

// document.addEventListener('mousemove', e => {
//     cursor[0].setAttribute("style", "top: " + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px")
// })


window.onload = (event) => {
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml3 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: (el, i) => 100 * (i + 1)
        }).add({
            targets: '.ml3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 0
        });
};



const activate = document.getElementsByClassName('activate')[0];

activate.addEventListener('click', function (e) {
    var self = activate;

    self.classList.add('loading');

    setTimeout(function () {

        self.classList.add('done');

        setTimeout(function () {
            self.classList.remove('loading');
            self.classList.remove('done');
        }, 1000);
    }, 1000);


});



const element = document.querySelector(".js-tilt");

const options = {
    reverse: true,
    max: 50,
    glare: true,
    gyroscope: true,
    gyroscopeMinAngleX: -45,   
    gyroscopeMaxAngleX:45,     
    gyroscopeMinAngleY:-45,   
    gyroscopeMaxAngleY:45,     
    gyroscopeSamples:10  
}

VanillaTilt.init(element, options);


