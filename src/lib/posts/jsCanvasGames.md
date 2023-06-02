---
title: 'HTML Canvas Games: The Basics'
date: '2023-06-02'
updated: '2023-06-02'
categories:
  - 'html'
  - 'js'
  - 'games'
  - 'HTML Canvas Games'
coverImage: '/videos/canvasGamesBasics.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Build your own game using the HTML canvas element and JavaScript.
---

<script>
  import InteractivePen from '$lib/components/InteractivePen.svelte';
</script>

Let's start with the basics, we will need to create a canvas element in our HTML file. We will also need to create a script tag to write our JavaScript in.

## Setting up our environment

### HTML

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="css/main.css" />
		<script src="js/main.js" defer></script>
		<title>Our first JS Game</title>
	</head>
	<body>
		<canvas id="gameWindow"></canvas>
	</body>
</html>
```

### CSS

```css
/* css/main.css */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
#gameWindow {
	width: 100vw;
	height: 100vh;
}
```

### JavaScript

```js
// js/main.js

// we need to get the canvas element from our HTML file
const gameWindow = document.getElementById('gameWindow');
// we need to tell the canvas that its size has changed
gameWindow.width = gameWindow.clientWidth;
gameWindow.height = gameWindow.clientHeight;

// finally we need to get the context of the canvas
const ctx = gameWindow.getContext('2d');
```

## Drawing on the canvas

Now that we have our canvas set up we can start drawing on it. We will start by drawing a rectangle.

```js
// js/main.js

// We will start by telling it to begin drawing
ctx.beginPath();
// We will then tell it to draw a rectangle
// the first two numbers are the x and y coordinates of the top left corner
// the second two numbers are the width and height of the rectangle
ctx.rect(20, 20, 150, 150);
// we then will add a stroke to the rectangle
ctx.stroke();
// and then we will fill the rectangle
ctx.fillStyle = 'hotpink';
ctx.fill();
```

<InteractivePen>
    <span slot="try">
        <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/NoahBeij/embed/MWPNJMK?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/NoahBeij/pen/MWPNJMK">
        Untitled</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </span>
    <span slot="answer">
        <iframe height="300" style="width: 100%;" scrolling="no" title="canvasGames01Answer" src="https://codepen.io/NoahBeij/embed/LYgwWPe?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/LYgwWPe">
  canvasGames01Answer</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
    </span>
</InteractivePen>

## Adding more Rectangles

Adding more rectangles can be a bit tidious, so we will create a class that will do it for us. The class will also help us to add interactivity to our rectangles later on.

```js
// js/main.js

// we will create a class called Rectangle
class Rectangle {
	// the constructor will take in the x and y coordinates of the top left corner
	// the width and height of the rectangle
	// the color of the rectangle
	// and the context of the canvas
	constructor(xPos, yPos, width, height, color, ctx) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.width = width;
		this.height = height;
		this.color = color;
		this.ctx = ctx;
	}
	// we will create a draw method that will draw the rectangle for us
	draw() {
		this.ctx.beginPath();
		this.ctx.rect(this.xPos, this.yPos, this.width, this.height);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}
}
```

Now that we have our class we can create a new rectangle and draw it on the canvas.

```js
// js/main.js

// we will create a new rectangle
const rect1 = new Rectangle(20, 20, 150, 150, 'hotpink', ctx);
// and then we will draw it
rect1.draw();
```

<InteractivePen>
    <span slot="try">
        <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/NoahBeij/embed/MWPNJMK?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/NoahBeij/pen/MWPNJMK">
        Untitled</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </span>
    <span slot="answer">
        <iframe height="300" style="width: 100%;" scrolling="no" title="canvasGames02Answer" src="https://codepen.io/NoahBeij/embed/XWxvMdR?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/XWxvMdR">
  canvasGames02Answer</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
    </span>
</InteractivePen>

## Its time to 'move-it move-it'

Before we can start to move our rectangle we need a game render loop. This loop will run every frame (usually 60 times per second, depends on the refresh rate of the display) and will draw our game on the canvas.

### The Game Loop

For the game loop we will use a method of the `window` object build in javascript called `requestAnimationFrame`. This method will call a function every frame. We will use this method to call our `gameLoop` function.

```js
// js/main.js

// we will create a function called gameLoop
function gameLoop() {
	// we will call the requestAnimationFrame method and pass in the gameLoop function
	window.requestAnimationFrame(gameLoop);
	// we will clear the canvas, so that we can draw a new frame
	ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);

	// Here we will put our game logic
}
// lets get the first frame to start the loop

window.requestAnimationFrame(gameLoop);
```

### Preparing the rectangle class for movement

Before we can start moving our rectangle we need to add a few things to our rectangle class. We will add a few simple methods to set and get the X and Y position of the rectangle.

```js
// js/main.js

class Rectangle {
	constructor(xPos, yPos, width, height, color, ctx) {
		this.xPos = xPos;
		this.yPos = yPos;
		this.width = width;
		this.height = height;
		this.color = color;
		this.ctx = ctx;
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.rect(this.xPos, this.yPos, this.width, this.height);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}
	// we will add a method to set the x position
	setXPos(xPos) {
		this.xPos = xPos;
	}
	// we will add a method to set the y position
	setYPos(yPos) {
		this.yPos = yPos;
	}
	// we will add a method to get the x position
	getXPos() {
		return this.xPos;
	}
	// we will add a method to get the y position
	getYPos() {
		return this.yPos;
	}
}
```

Now we are ready to move our rectangle.

### Moving the rectangle

To move the rectangle we will add a few things to our game loop. We need to update the position of the rectangle and then draw it on the canvas.

```js
// js/main.js

const rect1 = new Rectangle(20, 20, 150, 150, 'hotpink', ctx);

function gameLoop() {
	window.requestAnimationFrame(gameLoop);
	ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);

	// Here we will put our game logic
	// We will update the x position of the rectangle
	rect1.setXPos(rect1.getXPos() + 1);
	//  Then we will draw the rectangle with the new position
	rect1.draw();
}
window.requestAnimationFrame(gameLoop);
```

Now our rectangle will move 1 pixel to the right every frame.

<InteractivePen>
    <span slot="try">
        <iframe height="300" style="width: 100%;" scrolling="no" title="canvasGames02Answer" src="https://codepen.io/NoahBeij/embed/XWxvMdR?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/XWxvMdR">
  canvasGames02Answer</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
    </span>
    <span slot="answer">
        <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/NoahBeij/embed/PoyMmPN?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/NoahBeij/pen/PoyMmPN">
        Untitled</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </span>
</InteractivePen>

## Adding keyboard input

Now we can move our rectangle, but we can only move it to the right. We want to be able to move it in all directions. To do this we will add keyboard input to our game.

### Adding keyboard input listener

We will keep track of what key is pressed and change it state, so that we can use it in our game loop.

```js
// js/main.js

// Create an object to store the current state of the keyboard
const keyboardState = {};

// Event listener for keydown event
document.addEventListener('keydown', (event) => {
  // Store the pressed key in the keyboard state object
  keyboardState[event.key] = true;
});

// Event listener for keyup event
document.addEventListener('keyup', (event) => {
  // Remove the released key from the keyboard state object
  keyboardState[event.key] = false;
});
```

### Using the keyboard input

Now we have the logic to use keyboard inputs in our game, we can use it to move our rectangle. We will add a few if statements to our game loop to check if a key is pressed and then move the rectangle in the right direction.

```js
// js/main.js

function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, gameWindow.width, gameWindow.height);

// check what key is pressed
   if (keyboardState["ArrowUp"]) {
    // if the up arrow is pressed move the rectangle up
     rect1.setYPos(rect1.getYPos() - 1);
   } else if (keyboardState["ArrowDown"]) {
    // if the down arrow is pressed move the rectangle down
     rect1.setYPos(rect1.getYPos() + 1);
   } else if (keyboardState["ArrowLeft"]) {
    // if the left arrow is pressed move the rectangle left
     rect1.setXPos(rect1.getXPos() - 1);
   } else if (keyboardState["ArrowRight"]) {
    // if the right arrow is pressed move the rectangle right
     rect1.setXPos(rect1.getXPos() + 1);
   }
    // draw the rectangle with the new position
    rect1.draw();
}
window.requestAnimationFrame(gameLoop);
```

<InteractivePen>
    <span slot="try">
        <iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/NoahBeij/embed/PoyMmPN?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/NoahBeij/pen/PoyMmPN">
        Untitled</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </span>
    <span slot="answer">
        <iframe height="300" style="width: 100%;" scrolling="no" title="canvasGames04Answer" src="https://codepen.io/NoahBeij/embed/gOBVWRw?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
        See the Pen <a href="https://codepen.io/NoahBeij/pen/gOBVWRw">
        canvasGames04Answer</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
        on <a href="https://codepen.io">CodePen</a>.
        </iframe>
    </span>
</InteractivePen>

## Congratulations

You have learned the basics of the html canvas. You can now use this knowledge to make your own games. You can also check out the [examples](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) on the MDN website to see what else you can do with canvas.