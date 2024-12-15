// 时间实现

const targetNumber1= 5; // 指定的目标数字
const duration1= 3000; // 动画持续时间，单位为毫秒 
const counterElement1 = document.querySelector('.continer .wrap .time  .a'); // 获取数字显示的元素 
let startTime = null; // 动画开始时间 
function step1(timestamp) { 
    if (!startTime) startTime = timestamp; // 记录动画开始时间
        const progress = timestamp - startTime; // 计算动画进度 
        // // 根据动画进度计算当前数字的值 
        const currentNumber = Math.round(targetNumber1 * (progress / duration1)); counterElement1.textContent = currentNumber; // 更新数字显示
    if (progress < duration1) {
        // 继续下一帧动画
         requestAnimationFrame(step1); 
     } else { // 动画结束，显示最终数字
        counterElement1.textContent = targetNumber1; }
    }    
 // 启动动画  动画帧，定时循环
 requestAnimationFrame(step1); 


const targetNumber2= 10; // 指定的目标数字
const duration2= 3000; // 动画持续时间，单位为毫秒 
const counterElement2 = document.querySelector('.continer .wrap .time  .b'); // 获取数字显示的元素 
 let startTime2 = null; // 动画开始时间 
function step2(timestamp) { 
    if (!startTime) startTime2 = timestamp; // 记录动画开始时间
        const progress = timestamp - startTime2; // 计算动画进度 // 根据动画进度计算当前数字的值 
        const currentNumber = Math.round(targetNumber2 * (progress / duration2)); counterElement2.textContent = currentNumber; // 更新数字显示
    if (progress < duration2) {
        // 继续下一帧动画
         requestAnimationFrame(step2); 
     } else { // 动画结束，显示最终数字
        counterElement2.textContent = targetNumber2; }
    }    
 // 启动动画
requestAnimationFrame(step2); 





const targetNumber3= 1557; // 指定的目标数字
const duration3= 3000; // 动画持续时间，单位为毫秒 
const counterElement3 = document.querySelector('.continer .wrap .time  .c'); // 获取数字显示的元素 
 let startTime3 = null; // 动画开始时间 
function step3(timestamp) { 
    if (!startTime) startTime3 = timestamp; // 记录动画开始时间
        const progress = timestamp - startTime3; // 计算动画进度 // 根据动画进度计算当前数字的值 
        const currentNumber = Math.round(targetNumber3 * (progress / duration3)); counterElement3.textContent = currentNumber; // 更新数字显示
    if (progress < duration3) {
        // 继续下一帧动画
         requestAnimationFrame(step3); 
     } else { // 动画结束，显示最终数字
        counterElement3.textContent = targetNumber3; }
    }    
 // 启动动画
requestAnimationFrame(step3); 

const targetNumber4= 3610; // 指定的目标数字
const duration4= 3000; // 动画持续时间，单位为毫秒 
const counterElement4 = document.querySelector('.continer .wrap .time  .d'); // 获取数字显示的元素 
 let startTime4= null; // 动画开始时间 
function step4(timestamp) { 
    if (!startTime) startTime4 = timestamp; // 记录动画开始时间
        const progress = timestamp - startTime4; // 计算动画进度 // 根据动画进度计算当前数字的值 
        const currentNumber = Math.round(targetNumber4 * (progress / duration4)); counterElement4.textContent = currentNumber; // 更新数字显示
    if (progress < duration4) {
        // 继续下一帧动画
         requestAnimationFrame(step4); 
     } else { // 动画结束，显示最终数字
        counterElement4.textContent = targetNumber4; }
    }    
 // 启动动画
requestAnimationFrame(step4); 





//时间轴
// 定义变量
let offset = 0;
let maxOffset = 0;
let minOffset = -3;
// 获取所有卡片元素并存储在数组中
const slides = Array.from(document.querySelectorAll(".card"));
// 获取时钟表盘元素
const clock = document.querySelector("#clock-table");
// 设定起始年份为2021
let startYear = 2021;//2021
for (let i = -60, year = startYear - 1; i < 300; i += 6) {//300
    // 调用添加时钟刻度函数
    addClockScale(i);
    if (i % 60 === 0) {
        // 如果为整点时，调用添加粗刻度函数
        addThickClockScale(i, year);
        year++;
    }
}
// 添加时钟刻度
function addClockScale(degree) {
    // 创建一个隐藏的表格元素
    const invisibleClockTable = document.createElement("div");
    // 添加类名
    invisibleClockTable.className = "invisible-table";
    // 设置旋转角度
    invisibleClockTable.style.transform = `rotate(${degree}deg)`;
    // 创建时钟刻度元素
    const clockScale = document.createElement("div");
    // 添加类名
    clockScale.className = "clock-scale";
    // 将时钟刻度元素添加到表格中
    invisibleClockTable.appendChild(clockScale);
    // 将表格添加到时钟表盘中
    clock.appendChild(invisibleClockTable);
}
// 添加粗刻度
function addThickClockScale(degree, time) {
    // 创建一个隐藏的表格元素
    const invisibleClockTable = document.createElement("div");
    invisibleClockTable.className = "invisible-table";
    invisibleClockTable.style.transform = `rotate(${degree}deg)`;
    const thickClockScale = document.createElement("div");
    thickClockScale.className = "clock-thick";
    const scaleContent = document.createElement("span");
    scaleContent.textContent = `${time}`;
    thickClockScale.appendChild(scaleContent);
    invisibleClockTable.appendChild(thickClockScale);
    clock.appendChild(invisibleClockTable);
}
// 向前切换卡片
function slideToPrev() {
    // 更新偏移量，取最大值
    offset = Math.min(maxOffset, offset + 1);
    slides.forEach(slide => {
        // 根据偏移量设置卡片垂直偏移效果
        slide.style.transform = `translateY(${offset * 100}%)`;
    });
    // 调用旋转时钟表盘函数
    clockRotate(offset * 60);
}
// 向后切换卡片
function slideToNext() {
    offset = Math.max(minOffset, offset - 1);
    slides.forEach(slide => {
        slide.style.transform = `translateY(${offset * 100}%)`;
    });
    clockRotate(offset * 60);
}
// 旋转时钟表盘
function clockRotate(degree) {
    // 根据角度旋转时钟表盘
    clock.style.transform = `rotate(${degree}deg)`;
}