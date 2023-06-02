---
title: 'HTML Canvas Games'
date: '2023-06-02'
updated: '2023-06-02'
categories:
  - 'html'
  - 'js'
  - 'games'
coverImage: '/videos/bunny.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Build your own game using the HTML canvas element and JavaScript.
---

<script>
  import InteractivePen from '$lib/components/InteractivePen.svelte';
</script>


# Build your first game using HTML canvas and JavaScript

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
const gameWindow = document.getElementById("gameWindow");
// we need to tell the canvas that its size has changed
gameWindow.width = gameWindow.clientWidth;
gameWindow.height = gameWindow.clientHeight;

// finally we need to get the context of the canvas
const ctx = gameWindow.getContext("2d");
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
ctx.rect(20,20,150,150);  
// we then will add a stroke to the rectangle
ctx.stroke();
// and then we will fill the rectangle
ctx.fillStyle = "hotpink";
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
class Rectangle{
    // the constructor will take in the x and y coordinates of the top left corner
    // the width and height of the rectangle
    // the color of the rectangle
    // and the context of the canvas
    constructor(xPos, yPos, width, height, color, ctx){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }
    // we will create a draw method that will draw the rectangle for us
    draw(){
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
const rect1 = new Rectangle(20, 20, 150, 150, "hotpink", ctx);
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
function gameLoop(){
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

class Rectangle{
    constructor(xPos, yPos, width, height, color, ctx){
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }
    draw(){
        this.ctx.beginPath();
        this.ctx.rect(this.xPos, this.yPos, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }
    // we will add a method to set the x position
    setXPos(xPos){
        this.xPos = xPos;
    }
    // we will add a method to set the y position
    setYPos(yPos){
        this.yPos = yPos;
    }
    // we will add a method to get the x position
    getXPos(){
        return this.xPos;
    }
    // we will add a method to get the y position
    getYPos(){
        return this.yPos;
    }
}
```

now we are ready to move our rectangle.

### Moving the rectangle

To move the rectangle we will add a few things to our game loop. 