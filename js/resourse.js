// const box1 = document.querySelector(".continer .first .text1");
// const box2 = document.querySelectorAll(".continer .first .litter-text");
// const box3 = document.querySelector(".continer .first .pic img");
// const box4 = document.querySelector(".continer .first .pic1");
const box5 = document.querySelector(".continer .second .x-wrap  .video1");
const box8 = document.querySelector(".continer .second .x-wrap  .video2");
const box9 = document.querySelector(".continer .second .x-wrap  .video3");
const box6 = document.querySelector(" .continer .thirst img");
const box7 = document.querySelectorAll(" .continer .forth div");

// const box4 = document.querySelector(".continer .first .pic1");
// const box5 = document.querySelector(".text1");
        //用js检测鼠标滚轮距离顶部位置来给div添加动画
        window.onscroll = function () {
            //检测鼠标滚轮距离顶部位置
            const top = document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(top, box1.offsetTop);
            console.log(top, box5.offsetTop);

            //要设置到DIV显示出来时给div添加动画 也可以设置一个数值只要保证div出来给它加动画即可
            // if (top + window.innerHeight >= box1.offsetTop) {
            //     box1.style.animation = "test 1s linear";
            //     box2[0].style.animation = "test 0.7s linear 0.1s";
            //     box2[1].style.animation = "test 0.7s linear 0.1s";
            //     box2[2].style.animation = "test 0.7s linear 0.1s";
            //     box2[3].style.animation = "test 0.7s linear 0.1s";
            //     box3.style.animation = "test2 1s linear";
            //     box4.style.animation = "test 1s linear 0.05s";
                
                
            // }
             if(top + window.innerHeight >= 1600){
                box5.style.animation = "test 1s linear";
                box8.style.animation = "test 1s linear";
                box9.style.animation = "test 1s linear";
            }
            if(top + window.innerHeight >= 2100){
                box6.style.animation = "test4 1s linear ";
            }
            if(top + window.innerHeight >= 2600){
                // box7[0].style.animation = "test5 1s linear ";
                box7[1].style.animation = "test5 1s linear ";
                box7[2].style.animation = "test5 1s linear ";
                box7[3].style.animation = "test5 1s linear ";
                box7[4].style.animation = "test5 1s linear ";
                box7[5].style.animation = "test5 1s linear ";
                box7[6].style.animation = "test5 1s linear ";
            }

        }



// 获取图片和视频元素
var veImg1 = document.getElementById("veImg1");
var ve1 = document.getElementById("ve1");
var veImg2 = document.getElementById("veImg2");
var ve2 = document.getElementById("ve2");
var veImg3 = document.getElementById("veImg3");
var ve3 = document.getElementById("ve3");

// 添加点击事件监听器
veImg1.onclick = function() {
veImg1.style.display = "none"; // 隐藏图片
ve1.style.display = "block"; // 显示视频
ve1.play(); // 播放视频
};

veImg2.onclick = function() {
    veImg2.style.display = "none"; 
    ve2.style.display = "block"; 
    ve2.play(); 
    };

veImg3.onclick = function() {
    veImg3.style.display = "none"; 
    ve3.style.display = "block"; 
    ve3.play(); 
    };

veImg4.onclick = function() {
    veImg4.style.display = "none";
    ve4.style.display = "block"; 
    ve4.play(); 
    };