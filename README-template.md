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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

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
- 

### What I learned

I learned how to do a gredient in background

```html
<div class="card gred">
</div>
```

```css
.gred {
  background-image: linear-gradient(
    to bottom,
    hsl(252, 100%, 67%) 10%,
    hsl(241, 81%, 54%)
  )
};
```
how to use data json

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```



### Continued development

- Theory of color
- Json in javascript


### Useful resources

- [gredien](https://www.youtube.com/watch?v=Skjr9fycnio) - helps me in gredient.
- [fetching](https://www.youtube.com/watch?v=eS-FVnhjvEQ) - This is an amazing video that helped me use fetch to take data from data.json

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@spr-nova](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
