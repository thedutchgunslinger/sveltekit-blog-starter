---
title: 'Custom Mouse Cursor'
date: '2023-05-31'
updated: '2023-05-31'
categories:
  - 'html'
  - 'css'
  - 'js'
  - 'effect'
coverImage: '/videos/customCursor.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Make your own custom mouse following cursor using HTML, CSS and JS.
---

<iframe height="300" style="width: 100%;" scrolling="no" title="Custom Cursor" src="https://codepen.io/NoahBeij/embed/OJOmapd?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/OJOmapd">
  Custom Cursor</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## step 1

To start lets make a html file called index.html. then add 2 divs. one with the class of cursor and one with the class of container. then add a script tag with the src of script.js

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Custom Cursor</title>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body>
		<div class="cursor"></div>
		<div class="container"></div>
		<script src="script.js"></script>
	</body>
</html>
```

## step 2

After that lets do the styling of the custom cursor. in my case I want it to be a circle. We also want to make the container fit the screen.

```css
/* style.css */
#container {
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
}

#cursor {
	height: 20px;
	width: 20px;
	position: absolute;
	border-radius: 50%;
	border: 2px solid #000;
}
```

## step 3

Now it's Javascript time. we want to cursor to follow to mouse.

```js
// script.js
const cursor = document.querySelector('#cursor');

const moveCursor = (e) => {
	const mouseY = e.clientY;
	const mouseX = e.clientX;
	cursor.style.transform = `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0)`;
};
window.addEventListener('mousemove', moveCursor);
```

## step 4

to make the cursor delay a bit we can add a transition to the cursor. we also want to turn of the pointer events so we can click though the cursor.

```css
/* style.css */
transition-timing-function: ease-out;
transition-duration: 300ms;
pointer-events: none;
```

Congration you made a custom cursor. if you want to see the full code you can check it out on [codepen](https://codepen.io/NoahBeij/pen/OJOmapd)