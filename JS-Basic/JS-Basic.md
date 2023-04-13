# JS-Basic
>zhangqq  
Apr-10, 2023  
Chongqing
---

权威网站[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)

## 书写位置

与CSS一样有三种：行内、内部、外联，内部写在`</body>`上方：

```html
<body>
    <script>
        alert('Hello JavaScript!')
    </script>
</body>
```

## 输入和输出

```html
<body>
    <script>
    	document.write('Fuck you<h1>fjz</h1>')
        //programmer debug
        console.log('debug')
        prompt('Pls enter you name')
    </script>
</body>
```

## 变量

变量名区分大小写。

```html
<body>
    <script>
        //声明变量
        let a
        a = 48
        
        let b = 16
        document.write(a, b)
        
        let c = 6, d = 'fuck'
        
        let fuck = prompt('Fuck')
        alert(fuck)
    </script>
</body>
```

数组

```html
<body>
    <script>
        let a = ['fuck', 'fjz', '日你妹']
        alert(a[0])
        alert(a.length)
    </script>
</body>
```

## 常量

```html
<body>
    <script>
        const G = 9.8
        alert(G)
    </script>
</body>
```

## 数据类型

number

string

boolean

undefined

null

各种数据可用`+`混合拼接：

```html
<body>
    <script>
        let fuck = 'Fuck'
        alert(fuck + ' fjx' + 520)
    </script>
</body>
```

模板拼接：

```html
<body>
    <script>
        let fuck = 'Fuck'
        alert(`${fuck} fjx 520`)
    </script>
</body>
```

undefined和null：

```html
<body>
    <script>
        // undefined
        let a
        
        // null
        let b = null
    </script>
</body>
```

数据类型：

```html
<body>
    <script>
        let fuck = 'Fuck'
        document.write(typeof fuck)
        
        let f
        document.write(typeof(f))
    </script>
</body>
```

类型转换：

```html
<body>
    <script>
        prompt('pls enter a number')
        // prompt和表单输入是数据钧默认为字符串
        
        //隐式转换：
        console.log('2' + 1)	// 除了+，其余转为数字
        console.log('2' - 1)
        console.log('2' * 1)
        console.log('2' / 1)
        console.log('fjz' / 1)
        console.log(+'123')		// 转换为数字
        
        
        //显示转换：
        console.log(Number('123'))
        console.log(parseInt('12kk3'))	// 12
        console.log(parseFloat('12.6kk3'))	// 12.6
    </script>
</body>
```

## 案例-表格渲染

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h2 {
            text-align: center;
        }
        table {
            /* 合并边框 */
            border-collapse: collapse;
            margin: 0 auto;
            text-align: center;
        }
        table, th, td {
            border: solid 1px #000;
        }
        th {
            padding: 5px 30px;
        }
    </style>
</head>
<body>
    <h2>订单确认</h2>
    <script>
        let price = prompt('price')
        let number = prompt('number')
        let address = prompt('address')
        let total = price * number

        document.write(`
            <table>
                <tr>
                    <th>商品名称</th>
                    <th>商品价格</th>
                    <th>商品数量</th>
                    <th>总价</th>
                    <th>收货地址</th>
                </tr>
                <tr>
                    <td>小米PLus</td>
                    <td>${price}元</td>
                    <td>${number}</td>
                    <td>${total}元</td>
                    <td>${address}</td>
                </tr>
            </table>
        `)
    </script>
</body>
</html>
```

## 运算符

+=、-=、\*=、/=，i += 1

自增 ++ i、-- i，i ++、i --

比较：<, >, <=, >=, ==（值相等）, ===（类型和值都相等）, !==（不全等），NaN不等于任何人，包括它自己

逻辑：&&，||，!

## if分支语句

```html
<body>
    <script>
        let a = 2
        if (a > 2) {
            console.log('Fuck you')
        } else if (a > 3) {
            console.log('Fuck you too')
        } else {
            console.log('Fuck you anyway')
        }
    </script>
</body>
```

三元运算：`3 < 5 ? alert('fuck') : alert('you')`，如果`3 < 5`为真，则`alert('fuck')`，否则`alert('you')`。用来补0：`num = num < 10 ? '0' + num : num`

## switch 语句

```html
<body>
    <script>
        let a = 2
        switch () {
            case val1:
                code1
                break
            case val2:
                code2
                break
            default:
                code
                break
        }
    </script>
</body>
```

## while 循环

```html
<body>
    <script>
        let i = 1
        while (i < 5) {
            console.log(i)
            i ++
        }
    </script>
</body>
```
### ATM 机案例
```html
<body>
    <script>
        let money = 1000
        while (true) {
            let re = +prompt(`
                    请输入序号操作：
                    1. 取钱
                    2. 存钱
                    3. 查看余额
                    4. 退出`)
            if (re === 4) {
                break
            }
            switch (re) {
                case 1:
                    let draw = +prompt(`请输入提取金额`)
                    money = money - draw
                    break
                case 2:
                    let deposit = +prompt(`请输入存款金额`)
                    money = money + deposit
                    break
                case 3:
                    alert(`您的余额：${money}`)
                    break
                default:
                    alert(`请输入正确序号`)
                    break
            }
        }
        
    </script>
</body>
```

## for 循环

```html
<body>
    <script>
        for (let i = 1; i < = 3; i++) {
            console.log(i)
        }
    </script>
</body>
```
### 案例-乘法表
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        span {
            display: inline-block;
            padding: 5px 10px;
            margin: 2px;
            border: 1px solid #c557b6;
            box-shadow: 2px 2px 2px #9b929b;
            width: 80px;
            text-align: center;
        }
    </style>
</head>
<body>
    <script>
        for (let i = 1; i < 10; i++) {
            for (let j = 1; j <= i; j++) {
                document.write(`<span>${j} x ${i} = ${j * i}</span>`)
            }
            document.write('<br>')
        }
    </script>
</body>
</html>
```

## 数组

改：arr[1] = 9

增：arr.push（加到末尾，并返回数组新长度），arr.unshift（加在开头，并返回数组新长度）

删：arr.pop()（删除末尾元素，返回改元素），arr.shift()（删除开头的元素，返回该元素），arr.splice(i, number)（删除的元素包括arr[i]，如果i不写则默认从0开始，如果number不写则默认删除后面所有）

### 案例-渲染柱形图例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        .box {
            display: flex;
            width: 700px;
            height: 300px;
            border-left: 1px solid pink;
            border-bottom: 1px solid pink;
            margin: 50px auto;
            justify-content: space-around;
            align-items: flex-end;
            text-align: center;
        }
        .box > div {
            display: flex;
            width: 50px;
            background-color: pink;
            flex-direction: column;
            justify-content: space-between;
        }
        .box div span {
            margin-top: -20px;
        }
        .box div h4 {
            margin-bottom: -30px;
            width: 80px;
            margin-left: -10px;
        }
    </style>
</head>
<body>
    <script>
        let arr = []
        for (let i = 1; i <= 4; i++) {
            arr.push(+prompt(`Pls enter the value of the seasion ${i}`))
        }

        document.write(`<div class="box">`)

        for (let i = 0; i < arr.length; i++) {
            document.write(`
            <div style="height: ${arr[i]}px;">
                <span>${arr[i]}</span>
                <h4>Seasion ${i}</h4>
            </div>`)
            console.log(arr[i])
        }

        document.write(`</div>`)
    </script>
</body>
</html>
```

## 函数

```javascript
function fuck (m) {
    console.log(m)
}

fuck('fuck you')
```

匿名函数：function () {}

函数表达式：将匿名函数赋值给变量，let a = function () {}

立即执行函数：(function () {})();（需加小分号）

## 对象

无序的数据集合，类似于python的字典

```javascript
let obj = {
    属性: 值
    方法: 函数
}
let obj2 = {
    fjz: 'fuck you'
    'rnm': 'yeah'
    ff: function () {
        condole.log()
    }
}
```

查：obj.fjz，obj['rnm']

改：obj.fjz = 'fuck you too'

增：obj.fuckyou = 'fjz'

删：delete obj.fuckyou

数学内置对象：Math.PI，Math.ceil()，Math.floor()，Math.round()，Math.random()  [0, 1)，Math.pow()，Math.abs()，Math.max()

## WEB API

DOM 文档对象模型

BOM 浏览器对象模型

```javascript
// 获取标签
document.querySlector('div')		// 通过标签名
document.querySlector('.box')		// 通过CSS选择器
document.querySelectorAll('span')


const a = document.querySelector('span')
a.innerText = 'Fuck you'			// 改变标签内容
a.innerHTML = '<i>Fuck you</i>'		// 改变标签内容和样式


let box = document.querySelector('.box')
box.style.width = '200px'			// 修改box的样式属性，名称带有‘-’的属性采用小驼峰命名


const div = document.querySelector('div')
div.className = 'box'				// 赋予div样式box，会抹掉之前的class
div.classList.add('box')			// 追加类box
div.classList.remove('box')			// 移除
div.classList.toggle('box')			// 切换，有就删除，没有就追加
```



### 案例-年会抽奖

[案例-年会抽奖](./抽奖/fuck.html)

### 获取表单属性

表单.value = 'username'
        .type = 'password'
        .checked = true
        .disable

### 间歇函数

setInterval(函数, time/ms)

```javascript
setInterval(function () {
    console.log('fuck')
}, 1000)
```

### 事件监听

```javascript
元素对象.addEventListener('事件类型', 执行函数)
```

- 鼠标事件：
  - click
  - mouseenter             鼠标经过
  - mouseleave             鼠标离开
- 焦点事件
  - focus         获得焦点
  - blur           失去焦点
- 键盘事件
  - keydown
  - keyup
- 文本事件
  - input
