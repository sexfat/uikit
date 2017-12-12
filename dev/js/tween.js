//初始化
TweenMax.set(".box1", {
    x: 20,
    y: 80,
    background: "#f20"
});
TweenMax.set(".box2", {
    x: 50,
    y: 190,
    background: "#de2"
});

//動畫
TweenMax.from(".box3", 1.6, {
    x: 50,
    y: 789,
    ease: Power3.easeInOut
});

TweenMax.to(".box4", 1, {
    x: 140,
    y: 0,
    // rotationY: 360,
    rotationX: 360,    
    boxShadow: "0px 0px 20px red",
    scale:2,
    delay: 2,
    repeat: 3,
    repeatDelay: 2,
    yoyo: true,
    alpha:0,
    ease: Power3.easeInOut
});




var tl = new TimelineMax({
    repeat: 1,
    repeatDelay: 3
});

tl.add(TweenMax.from(".box1", 0.8, {
    x: 50,
    y: 789,
    ease: Circ.easeInOut
}));
tl.add(TweenMax.from(".box2", 1, {
    x: 50,
    y: 400,
    ease: Power3.easeInOut
}));