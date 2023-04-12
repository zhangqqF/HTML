







## 清除浮动

清除浮动带来的影响，浮动后就不占标准流的位置，如果浮动的标签不设置高度，那它的位置会被标准流占用，而有些时候浮动标签不宜设置高度，以便可被其子标签撑开。

解决方法：

- overfloat: hidden

- 额外标签法：加上带有clear: both样式的块级元素

- 单伪元素法：clearfix:after

- 双伪元素：

  ```css
  /* 外边距塌陷：父级标签和子级标签都是块元素时，子级加margin会影响父级的位置。
     此处加before是为解决该问题 */
  .clearfix::before,
  .clearfix::after {
      content: '';
      display: table;
  }
  .clearfix::after {
      clear: both;
  }
  ```

## 定位

一般用于盒子层叠。

属性名：position

类型：

 - static
	- relative                相对于之前的位置，不改变块级显示，不脱标
 - absolute              相对于被定为的父级标签（如果父级没有被定位，会上溯，直到body），改变块级显示为行内快（宽高生效、行排）
	- fixed                     相对屏幕的位置不变，脱标，行内快显示模式

偏移值（就近原则）：

- left
- right
- top
- bottom
