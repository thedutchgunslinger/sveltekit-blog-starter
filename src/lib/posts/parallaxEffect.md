---
title: 'Mouse Parallax Effect'
date: '2023-05-31'
updated: '2023-05-31'
categories:
  - 'html'
  - 'css'
  - 'js'
coverImage: '/videos/mouseParallax.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Build your own dynamic mouse parallax effect.
---

<iframe height="300" style="width: 100%;" scrolling="no" title="muis parallax effect" src="https://codepen.io/NoahBeij/embed/eYeWbpe?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/eYeWbpe">
  muis parallax effect</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## step 1

We will start with the Javascript code, we will make a function we can reuse for our html. We'll start with adding a event listener.

```js
// main.js
document.addEventListener("mousemove", parallax);
```

## step 2

Now we need to make the function we passed to the event listener called parallax. We will start with getting all the elements we need. In this case will be all the elements with the class of square.

```js
// main.js
function parallax(e) {

  this.querySelectorAll(".square").forEach(function (move) {

  });
}
```

## step 3
To get a modular speed we will look for a data attribute called speed on the html tag.

```js
// main.js
function parallax(e) {
  this.querySelectorAll(".square").forEach(function (move) {
    const speed = move.getAttribute("data-speed");
  });
}
```

## step 4
Now we need to get the x and y position of the mouse. We can do this by getting the x and y position of the mouse and subtracting the x and y position of the element. and multiply it by the speed.

```js
// main.js
function parallax(e) {
  this.querySelectorAll(".vierkant").forEach(function (move) {
    const speed = move.getAttribute("data-speed");
    let x = (e.clientX * speed) / 250;
    let y = (e.clientY * speed) / 250;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}
```

## step 5
We can now use our new function in the html, to use it we need to add the data attribute to the element we want to move. We also need to add the class of square to the element.

```html
<!-- index.html -->
<div class="square" data-speed="10"></div>
```

Congration you made a mouse parallax effect. if you want to see the full code you can check it out on [codepen](https://codepen.io/NoahBeij/pen/eYeWbpe)    