## 应用样式

大部分标签都有一些默认的样式。

```html
<!-- 内联样式 -->
<div style='color: red; font-size: 16px;'>text</div>

<!-- 通过选择器外联样式 -->
<div class='text'>text</div>
<style>
  .text {
    color: red;
    font-size: 16px;
  }
</style>
```

## 样式优先级

当多个样式作用于同一个元素时，优先级高的样式生效。

计算优先级的基本规则：
- 后面的样式 > 前面的样式
- !important > 内联样式 > ID 选择器 > 类选择器 > 标签选择器

```html
<div>text 1</div>
<style>
  div {
    color: red;
  }

  div {
    color: orange;
  }

  #test-id {
    color: yellow;
  }

  .test-class {
    color: green;
  }
</style>
```

## 盒子模型

浏览器把页面上的元素都看做是一个矩形的盒子，盒子有宽高，位置等属性。
盒子由四部分组成：内容区、内边距（padding）、边框（border）和外边距（margin）。

![CSS Box](/images/css-box.png)

#### 盒子的三种基本类型和位置

盒子的三种基本类型:
1. 块元素：不管宽高，独自占据一行的位置
2. 行内元素：宽高由实际内容决定，可以与其他行内元素或行内块元素同在一行
3. 行内块元素：可以设置宽高，可以与其他行内元素或行内块元素同在一行

盒子的类型可以通过 display 设置：
- display: block 设置元素为块元素
- display: inline 设置元素为行内元素
- display: inline-block 设置元素为行内块元素

```html
<div>div 标签默认是 block 元素</div>
<span>span 标签默认是 inline 元素</span>
其他文本
<img alt='图片'> img 标签默认是 inline-block 元素
```

#### 盒子的宽高和 box-sizing

这里的宽高指的是在 css 代码中编写的 width 和 height 。

box-sizing 设置盒子宽高的计算方式：
- box-sizing 为 content-box 时（默认），盒子的宽高 = 内容区
- box-sizing 为 border-box 时，盒子的宽高 = 内容区 + 内边距 + 边框

```html
<div id='box1'>box 1</div>
<div id='box2'>box 2</div>
<style>
#box1 {
  width: 80px;
  height: 80px;
  padding: 5px;
  margin: 5px;
  border: 5px solid #000;
}

#box2 {
  width: 80px;
  height: 80px;
  padding: 5px;
  margin: 5px;
  border: 5px solid #000;
  box-sizing: border-box;
}
</style>
```

## Flex 布局

[学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)
