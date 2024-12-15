


// const box1 = document.querySelector(".continer .wrap .content1 .a");
// const box2 = document.querySelector(".continer .wrap .content1 .b");
// const box3 = document.querySelector(".continer .wrap .content1 .c");
// const box4 = document.querySelector(".continer .wrap .content1 .d");
const box5 = document.querySelector(".continer .wrap .content2 .a");
const box6 = document.querySelector(".continer .wrap .content2 .b");
const box7 = document.querySelector(".continer .wrap .content2 .c");
const box8 = document.querySelector(".continer .wrap .content2 .d");
const box9 = document.querySelector(".continer .wrap .content2 .e");
//用js检测鼠标滚轮距离顶部位置来给div添加动画
window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top, box5.offsetTop);
    //要设置到DIV显示出来时给div添加动画 也可以设置一个数值只要保证div出来给它加动画即可
    // if (top + window.innerHeight >= -900) {
    //     box1.style.animation = "test 0.5s linear ";
    //     box2.style.animation = "test 0.5s linear ";
    //     box3.style.animation = "test 0.5s linear ";
    //     box4.style.animation = "test 0.5s linear ";
    // }
    if (top + window.innerHeight >= 1500) {
        box5.style.animation = "test 0.5s linear ";
        box6.style.animation = "test 0.5s linear ";
        box7.style.animation = "test 0.5s linear ";
        box8.style.animation = "test 0.5s linear ";
        box9.style.animation = "test 0.5s linear ";
    }
}