import $ from "jquery";
import fullpage from 'fullpage.js';
import "gsap";

import {
    TweenMax
} from "gsap";
// import ScrollMagic from 'scrollmagic';


let fullPageInstance = new fullpage('#fullpage', {
    navigation: true,

});


let controller = new ScrollMagic.Controller();

const action01 = TweenMax.to('.box1', 2, {
    x: 100,
    y: 30,
    delay: 1
});

const action02 = TweenMax.to('.box2', 2, {
    x: 140,
    y: 60,
    delay: 2

});

var section = new ScrollMagic.Scene({
    triggerElement: "#trigger01",
    duration: '80%',
    triggerHook: 0,
    offset: -20,
    reverse: false,
}).setTween([action01 , action02]).addIndicators({
    name: 'section01'
}).addTo(controller)











console.log('end ok');