# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor]

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size (Done)
- See hover and focus states for all interactive elements on the page (Done)
- **Bonus**: Use the local JSON data to dynamically populate the content (Done)

### Screenshot

[web](./web.png)
[mobile](./mobile.png)

### Links

- Solution URL: (https://github.com/spr-nova/resault_sammary)
- Live Site URL: (https://spr-nova.github.io/resault_sammary/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Gridient
- JSON

### What I learned

I learned how to do a gredient in background
I learned also ow to fetch data from json file

```html
<div class="card gred"></div>
```

```css
.gred {
  background-image: linear-gradient(
    to bottom,
    hsl(252, 100%, 67%) 10%,
    hsl(241, 81%, 54%)
  );
}
```

how to fetch data json

```js
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    let place = document.getElementById("resau");
    let out = "";
    for (let resault of results) {
      out += `
    <div>
      <small>
        <img src="${resault.icon}">
        ${resault.category}
      </small>
      <span>
      <span>${resault.score}</span>
      /100
      </span>
    </div>
    `;
    }
    place.innerHTML = out;
  });
```

### Continued development

- Theory of color
- Json in javascript
- fetching

### Useful resources

- [gredien](https://www.youtube.com/watch?v=Skjr9fycnio) - helps me in gredient.
- [fetching](https://www.youtube.com/watch?v=eS-FVnhjvEQ) - This is an amazing video that helped me use fetch to take data from data.json

## Author

- Website - [Manaf Hajriffi](https://github.com/spr-nova)
- Frontend Mentor - [@spr-nova](https://www.frontendmentor.io/profile/spr-nova)

## Acknowledgments

I got help by elzero from his playlist of css and outher video helped me in fetching
