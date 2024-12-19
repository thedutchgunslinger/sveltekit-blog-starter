---
title: 'A-Frame AR Viewer'
date: '2023-05-31'
updated: '2023-05-31'
categories:
  - 'html'
  - 'js'
  - 'aframe'
  - 'webXR'
coverImage: '/videos/customCursor.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Make your own custom mouse following cursor using HTML, CSS and JS.
---

Welcome to the wonderfull world of webxr!

## step 1



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