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

