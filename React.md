## 服务端渲染与客户端渲染

服务端渲染：用户请求服务器，服务器上直接生成 HTML 内容并返回完整的内容给浏览器。

![Website](/images/website.jpg)

客户端渲染：初始加载的页面中无展示内容，只加载一些 JS 脚本，通过 JS 渲染生成页面。

![Webapp](/images/webapp.jpg)

## 模块化与组件化

将一个**复杂**的功能拆分成一个个实现了单一功能的模块。

组件化是应用层面的拆分。将应用拆分成一些的独立的、可复用的部件。组件拥有自己的结构、样式和行为。可以组合多个组件构成应用，也可以根据应用的状态显示不同的组件。

![Modular And Componentized](/images/modularAndComponentized.jpg)

## React

用于构建用户界面的 JavaScript 库，核心思想是 UI = render(data)

#### JSX

编写 React 的语法糖，使我们可以在 JS 中直接编写 HTML 代码，方便代码的编写和明确代码的语义。**JSX 需要编译成 JS 才能在浏览器中运行。**

```jsx
const element = <h1>Hello World</h1>;
// 等价于
const element = React.createElement(
  "h1",
  null,
  "Hello World"
);
```

#### React 元素

React 用来描述视图内容的最小单位，是一个普通的 JS 对象，可以使用 `ReactDOM.render()` 方法将其渲染成浏览器中的 DOM。React 元素一般使用 React.createElement() 来创建。

```jsx
// 创建一个 React 元素
const element = <h1 className="greeting">Hello World</h1>;

// React 元素的大概结构
{
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
}
```

#### React 组件

由 React 元素组成，可以定义它的属性、状态和行为。组件可以实现相对完整的功能，基本上 React 开发就是在写各种各样的组件。

```jsx
// 创建一个组件，以大写字母开头
function Welcome(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>Welcome back</p>
    </div>
  );
}
const component = <Welcome name="John"/>;

// 等价于

function Welcome(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.name
    ),
    React.createElement(
      "p",
      null,
      "Welcome back"
    )
  );
}
const component = React.createElement(Welcome, { name: "John" });
```

#### Virtual DOM

一个 React 应用是一堆 React 元素的集合，React 最终会把这个集合构造成一个描述应用的复杂的 JS 对象，这个 JS 对象就叫 Virtual DOM。我们可以用 ReactDOM 将这个对象渲染成页面的内容。

#### React Diff

当需要更新时，React 会重新生成一个 Virtual DOM，然后与旧的 Virtual DOM 进行差异比较，最后仅更新变化的地方。

总的来说，进行差异比较时，React 会比较两个地方：元素的类型和元素的 key。
当这两个地方不同时，React 会卸掉整个元素（包括其后代），重新生成新的元素。
当这两个地方相同时，会保留这个元素，然后去比较属性，并更新变化的属性。

## Todos demo

前端开发的 "Hello World"
[http://todomvc.com/](http://todomvc.com/)
