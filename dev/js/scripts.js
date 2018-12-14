import "gsap";
import {TweenMax} from "gsap";

TweenMax.to('.boxers', 1, {
    x: 200,
    y: 300
});

TweenMax.to('.boxer-center', 3, {
    rotationY: 360,
    transformOrigin: "left 50% -400",
    repeat: -1
})