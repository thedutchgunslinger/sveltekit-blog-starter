---
title: 'HTML Template Tag'
date: '2023-06-05'
updated: '2023-06-05'
categories:
  - 'html'
  - 'js'
coverImage: '/videos/htmlTemplateTag.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Learn to make HTML templates using the template tag.
---

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/NoahBeij/embed/VwVZyZr?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/NoahBeij/pen/VwVZyZr">
  Untitled</a> by Noah Beij (<a href="https://codepen.io/NoahBeij">@NoahBeij</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## step 1

First we need to make a template. We do this by using the `<template>` tag. This tag is used to make a template. We can put anything inside of it but it will not be rendered to the page. Let's make a template that has a title, paragraph and image.


```html
<!-- index.html -->

<!-- a container where we will add our items in -->
<div id="container"></div>

<template id="templateItem">
  <div class="card">
   <h2>Title</h2>
    <p>Content</p>
  <img src="" alt="">
  </div>
</template>
```

## step 2

Now we can use the template. We do this by using the `.content` property. This property returns the content of the template. We can use the `.cloneNode()` method to clone the content. This method takes a boolean as an argument. This boolean is used to determine if the children of the template should be cloned as well. We can use the `.appendChild()` method to add the cloned template to the container. This method takes a node as an argument. Before we add it to the container lets make a function so we can easily change the contents of it.

```js
// main.js

function addItem(inTitle, inDescription, inImage) {
// Get the template
const itemTemplate = document.querySelector('#templateItem');
// Make a copy/clone of the template
const newItem = itemTemplate.content.cloneNode(true);
// Replace content
newItem.querySelector('h2').textContent = inTitle;
newItem.querySelector('p').textContent = inDescription;
newItem.querySelector('img').src =  inImage;
// Add the copy to the document
document.querySelector('#container').appendChild(newItem);
}
```

## step 3

Now we can use the function we made in step 2 to add items to the container. Let's add 4 items to the container. Using an array of objects.


```js
// main.js

// First let's make some dummy data
const data = [{
  title: 'First Cat',
  content: 'This is the third cat',
  image: 'https://images.unsplash.com/photo-1584290867415-527a8475726d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU5NjU2NjF8&ixlib=rb-4.0.3&q=85',
},{
  title: 'Second Cat',
  content: 'This is the second cat',
  image: 'https://images.unsplash.com/photo-1491485880348-85d48a9e5312?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU5NjU3NDJ8&ixlib=rb-4.0.3&q=85',
},{
  title: 'Third Cat',
  content: 'This is the first cat',
  image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU5NjU2NjF8&ixlib=rb-4.0.3&q=85',
},{
  title: 'Last Cat',
  content: 'This is the last cat',
  image: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU5NjU2NjF8&ixlib=rb-4.0.3&q=85',
}]

// Now let's loop over the data and add it to the container
data.forEach(cat => {
  addItem(cat.title, cat.content, cat.image)
})
```

## Congrats

You have now made a template and used it to add items to the page. You can now use this to make a blog or a todo list. You can also use this to make a template for a modal or a dropdown.