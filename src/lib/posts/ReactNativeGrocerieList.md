---
title: 'React Native Grocerie List'
date: '2024-12-19'
updated: '2024-12-19'
categories:
  - 'html'
  - 'js'
  - 'React'
  - 'React Native'
  - 'Mobile'
  - 'Exercise'
coverImage: '/videos/grocerielistvideo.mp4'
coverWidth: 16
coverHeight: 9
excerpt: Make your own custom mouse following cursor using HTML, CSS and JS.
---


## The exercise

In this exercise we will create a simple grocery list app using React Native. This app will have a list of items that you can add and cross out.

### Requirements 

- an input field to add items
- a button to add the item to the list
- a list of items
- a way to cross out the items
- a button to clear the list
- a way to store the list locally
- (optional) a way to remove items from the list
- (optional) a way to edit items in the list

### wireframe

 ![wireframe](/images/wireframe_grocerie_list.png) 




## installation of react Native

```bash
    npx create-expo-app@latest
```

After that we need to move into the project folder and install the following dependencies:

```bash
    cd my-project-name

    npm install @reduxjs/toolkit
    npm install redux
    npx expo install @react-native-async-storage/async-storage
```
Here we install redux and async storage to manage the state of the app and have a way to store the data locally.

## Resources 

- [React Native](https://reactnative.dev/docs/components-and-apis)
- [Redux](https://redux.js.org/introduction/getting-started)
- [async storage](https://react-native-async-storage.github.io/async-storage/docs/usage/)