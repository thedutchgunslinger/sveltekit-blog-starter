---
title: 'JS Promises'
date: '2023-06-05'
updated: '2023-06-05'
categories:
  - 'js'
coverImage: '/videos/jsPromises.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Learn about promises and async in Javascript.
---

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/NoahBeij/embed/YzRKQJx?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/YzRKQJx">
  Untitled</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## step 1

First we need to make a new promise from its class, we do this by using the `new` keyword and the `Promise` class. The Promise class takes a function as an argument. This function takes 2 arguments, resolve and reject. Resolve is used when the promise is resolved and reject is used when the promise is rejected. Let's make it get a random number and if it is 1 we resolve the promise and if it is 0 we reject the promise.
    
```js
// main.js

const myPromise = new Promise((resolve, reject) => {
  let randomNum = Math.round(Math.random());
  if(randomNum){
    resolve('promise is resolved');
  }else {
    reject('promise is rejected')
  }
})
```

## step 2

Now we can use the promise. We do this by using the `.then()` method. This method takes a function as an argument. This function takes the resolved value as an argument. We can also use the `.catch()` method. This method takes a function as an argument. This function takes the rejected value as an argument. Let's use the promise we made in step 1 and use the values from the `.then()` and `.catch()` methods to change the text of a paragraph.



```js
// main.js

myPromise.then((value) => {
  p.textContent = value;
}).catch((value) => {
  p.textContent = value;
})
```