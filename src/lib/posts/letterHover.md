---
title: 'CSS letter hover effect'
date: '2023-06-05'
updated: '2023-06-05'
categories:
  - 'html'
  - 'css'
  - 'js'
  - 'effect'
coverImage: '/videos/letterHover.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Build your own letter hover effect class using HTML, CSS and JS.
---

<iframe height="400" style="width: 100%;" scrolling="no" title="letterHover" src="https://codepen.io/NoahBeij/embed/mdzNKwV?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/mdzNKwV">
  letterHover</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## step 1

To start lets make a html file called index.html. Then add some headings and text to it. Add the class letterHover to the headings you want to have the effect on.

```html
<!-- index.html -->

<h1 class="letterHover">Lorem ipsum dolor sit amet consectetur.</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum impedit adipisci necessitatibus dolorem repellat natus expedita error sequi esse quod dolor accusantium, doloribus ad vero. Nobis qui fuga ex?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quis nesciunt recusandae voluptatum delectus accusantium corporis ad reiciendis fuga, quam quod rem omnis, modi perferendis corrupti neque quisquam voluptatibus unde.</p>
<h2 class="letterHover">Lorem ipsum dolor sit amet consectetur.</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatum impedit adipisci necessitatibus dolorem repellat natus expedita error sequi esse quod dolor accusantium, doloribus ad vero. Nobis qui fuga ex?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium quis nesciunt recusandae voluptatum delectus accusantium corporis ad reiciendis fuga, quam quod rem omnis, modi perferendis corrupti neque quisquam voluptatibus unde.</p>
```

## step 2

let's add a bit of styling. 

```css
/* style.css */

:root {
  --background: #30343F;
  --accent: #DD99BB;
  --text: #F5FBEF;
}

html,body {
  padding: 0;
  margin: 0;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  background-color: var(--background);
  color: var(--text);
  font-family: arial;
}

h1,h2 {
  color: var(--accent);
  font-weight: bold;
  letter-spacing: 1px;
}
h1 {
  font-size: 3.5rem;
}
h2 {
  font-size: 3rem;
}

p {
  width: 60rem;
  font-size: 1.2rem;
  line-height: 1.6;
}
```

## step 3

prepare the css for the hover effect, First we need to set the `letterHover` class to position relative. then we need to add a css class called `letterAnim` that we will use later. 

```css
/* style.css */

.letterHover{
  position:relative;
}
.letterAnim {
    /* again position relative so we can use the the top property */
  position:relative;
  transition: all 0.2s ease-in-out;
  display: inline-block;
}

.letterAnim:hover {
 top: -5px;
}
```

## step 4 

Now we have the styling we need to apply it to every letter. to do so we will split the text in an array and add a `span` to every letter.

```js
// script.js

// get all the elements with the class letterHover
const letterHovers = document.querySelectorAll(".letterHover");

// loop through all the elements
letterHovers.forEach(letterHover => {
    // split the text in an array, and replace the spaces with a non breaking space
  const letterArray = letterHover.innerHTML.replace(/\s/g, "\u00A0").split("");
//   clear the innerHTML so we can replace it with the spans
  letterHover.innerHTML = '';
  
    // loop through the array and add a span to every letter
  letterArray.forEach(letter => {
    let span = document.createElement("span");
    let letterNode = document.createTextNode(letter);
    // add the letterAnim class to the span
    span.classList.add("letterAnim");
    // append the letter to the span
    span.appendChild(letterNode);
    // append the span to the letterHover element
    letterHover.appendChild(span);
  });
});
```

## step 5

Let's add some random rotation to the letters, to do so we will add a random number between -10 and 10 pixels to the rotation. using some clever css with properties.

first lets add the css to the `letterAnim:hover` class.

```css
/* style.css */

/* custom propertie where we will add the random rotation */
 rotate: var(--deg);
```

Now the last thing to do is add the random rotation to the custom property. we will do this in the javascript.

```js
// script.js

// get a random number between -10 and 10 
const randomDeg = Math.floor(Math.random() * 20)-10;
// set it to the custom property --deg of the span
span.style.setProperty('--deg', `${randomDeg}deg`)
```

## Congrats 

You have made your own letter hover effect. You can use this effect on any element you want. You can also change the css to make it your own. 