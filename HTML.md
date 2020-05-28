## 兼容性

[caniuse.com](https://caniuse.com/#search=html5)

## 语义化

尽量使用有意义的标签，使代码符合标准，有利于 SEO 或者和相关技术结合。

```html
<!-- 不太好的写法 -->
<div class='wrapper'>
  <div class='title'>标题</div>
  <div>段落内容</div>
  <div class='table'>
    <div class='row'>
      <div class='col'>数据1</div>
      <div class='col'>数据2</div>
    </div>
  </div>
  <span class='button'>按钮</span>
</div>

<!-- 相对好的写法 -->
<div class='wrapper'>
  <h1>标题</h1>
  <p>段落内容</p>
  <table>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
    </tr>
  </table>
  <button type='button'>按钮</button>
</div>
```

## 页面内容的基本结构

```html
<!-- 仅做参考 -->
<body>
  <header>
    头部
    <nav>导航</nav>
  </header>
  <div>
    <aside>侧边栏</aside>
    <main>页面内容</main>
  </div>
  <footer>
    尾部
  </footer>
</body>
```
