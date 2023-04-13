

// 获取样式
let hour = document.querySelector('.clock .hour')
let minute = document.querySelector('.clock .minute')
let second = document.querySelector('.clock .second')
console.log(second);


// 动画函数
function toTime() {
    // 获取实时时间
    let t = new Date()
    let tSecond = t.getSeconds()
    let tMinute = t.getMinutes()
    let tHour = t.getHours()
    // console.log(t)
    // console.log(tSecond)
    // console.log(tMinute)
    // console.log(tHour)

    // 更新样式
    second.style.transform = `translate(-50%) rotate(${tSecond*6}deg)`
    minute.style.transform = `translate(-50%) rotate(${tMinute*6}deg)`
    hour.style.transform = `translate(-50%) rotate(${tHour*30}deg)`
}

// 定时器
setInterval(toTime, 1000);
