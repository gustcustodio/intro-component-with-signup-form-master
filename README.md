# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./design/final-project.jpg)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox for layout
- JavaScript for form validation and dynamic styling
- Responsive design with mobile-first approach

### What I learned

This project helped reinforce my understanding of responsive design and form validation with JavaScript. Here are a few key takeaways:

Regex for Email Validation: I used a regular expression to validate the email format, ensuring it adheres to a typical structure (name@host.tld).

```js
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
```

Dynamic Error Messages: Error icons and messages were dynamically displayed based on field validation. Each input has associated error states managed through JavaScript functions.

```js
const setError = (index) => {
  formIconError[index].classList.remove("input-icon--hidden");
  formIconError[index].classList.add("input-icon--visible");
  formMessageError[index].classList.remove("span-hidden");
  formMessageError[index].classList.add("span-visible");
};

```
Focus Management: After form submission, I used .focus() to ensure the user is directed to the first invalid field, enhancing the user experience.

### Useful resources

- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) - Helped me refine the email validation.
- [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) This guide clarified Flexbox properties and helped with layout adjustments.

