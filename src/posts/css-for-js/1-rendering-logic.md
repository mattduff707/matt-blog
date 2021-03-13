---
date: "03/10/2021 9:43AM"
title: "Module 1: Rendering Logic 1"
category: "CSS"
tags: ["Css"]
description: "..."
---

## Built-in Declarations and Inheritance

<br>

### Built-in Declarations

_HTML tags do include a few minimal styles_. These styles are part of the **user-agent stylesheet**. Each browser includes their own stylesheet full of base styles like this.

<br>

Default `<a>` tag styles in Chrome 86

```css
a {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
```

A **CSS reset** is used to "flatten out" these user-agent stylesheets across different browsers. That way each browser starts with the same core set of styles

### Logical Properties

Logical properties and values use the abstract terms `block` and `inline` to describe the direction in which they flow. The physical meaning of these terms depends on the 'writing mode'.

<br>

**Block axis**: Vertical axis in English

<br>

**Inline axis**: Horizontal axis in English

<br>

### Writing mode

CSS writing modes is a CSS module that defines various international writing modes, such as **left-to-right** (Used by Latin and Indic scripts), **right-to-left** (used by Hebrew or Arabic scripts), **bidirectional** (used when mixing left-to-right and right-to-left scripts) and **vertical** (used by some Asian scripts)

### Inheritance

Certain CSS properties **inherit** from their parent containers (and grandparent thereafter, and so on). for example:

```HTML
<style>
  p {
    color: hotpink;
  }
  /*'you' will inherit the color hotpink from its parent element <p>*/
</style>
<p>I know <em>you</em> are, but what am I?</p>
```

**NOT ALL CSS PROPERTIES ARE INHERITED**
Most inherited properties are typography related, like `color`, `font-size`, `text-shadow`, and so on.

<br>

You can also use the `inherit` value to make a property inherit its value even if it normally wouldn't do so!

<br>

## The Cascade

```html
<style>
  p {
    font-weight: bold;
    color: hsl(0deg 0% 10%);
  }
  .introduction {
    color: violet;
  }
</style>
<p class="introduction">Hello world</p>
```

The **cascade algorithm**:

<br>

In this example, the `<p>` element is going to be rendered as bold violet colored text. This is because the browser needs to figure out what declarations apply to the element we are trying to render on the screen. Therefore it must first collect a set of matching rules. (`p` and `.introduction` will both apply to our element.) Once it has those rules, the browser needs to work out any conflicts. This can be imagined as a sort of death match. If multiple selectors apply, they must fight each other to see who applies. The winner is determined by the **specificity** of the selector!
<br>

`<tag>` < `.class` < `#id` < `!important`

## The Box Model

**Content**: where text, elements, and images appear

<br>

**Padding**: Space around the content within the walls of the border

<br>

**Border**: A border that goes around the padding and content but within the margin

<br>

**Margin**: The space outside the border. Margin is transparent

### Box-sizing

```html
<style>
  section {
    width: 500px;
  }
  .box {
    width: 100%;
    padding: 20px;
    border: 4px solid;
  }
</style>
<section>
  <div class="box"></div>
</section>
```

Due to the default declaration `box-sizing: content-box` in the browser the above codes `box` will be rendered with the dimensions 548px x 48px. This is a less than intuitive strategy for deciding element sizing (When you define something as having **500px** of width, it is easier to sleep at night knowing that it WILL be **500px** wide. Instead of having to also consider the width added by a border or padding! ), which is why it is common to specify a global rule of `box-sizing: border-box`.

```css
*,
*:before,
*:after {
  box-sizing: border-box;
}
```

Here is an example to show how the new sizing will be equated:

```html
<style>
  * {
    box-sizing: border-box;
  }
  section {
    width: 500px;
    height: 250px;
    padding: 25px;
  }
  .box {
    width: 100%;
    height: 100%;
    border: 2px solid;
  }
</style>
<section>
  <div class="box"></div>
</section>
```

In this example the `box` will have visible dimensions of: **450px** x **200px**
<br>

This is due to percentage-based `widths` and `heights` being relative to the amount of space being made available by the parent. In this case, our parent's border-box is **500px** x **250px**, but `padding` reduces the "content space" down to **450px** x **200px**. The child box fills 100% of that space.

## Padding

It is best to think of padding as "inner space". If you were to add a `background-color` to an element with some padding, the padding would also have that background color!

<br>

Padding can be set for all directions at once or individually

```css
.even-padding {
  padding: 20px;
}
.asymmetric-padding {
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 60px;
  padding-right: 80px;
}
/* The same thing, but using ✨ logical properties ✨ */
.asymmetric-logical-padding {
  padding-block-start: 20px;
  padding-block-end: 40px;
  padding-inline-start: 60px;
  padding-inline-end: 80px;
}
```

You can also utilize a more semantic approach using **overrides**

```css
.box {
  padding: 48px;
  padding-bottom: 0;
}
/*These will render the same padding since the padding-bottom value will
 override the shorthand declaration for padding-bottom*/
.box {
  padding: 48px 48px 0 48px;
}
```

When using this approach don't forget that **ORDER MATTERS!**

```css
.box {
  /*
    🙅‍♀️ because `padding-bottom` comes first,
    it will be overwritten by the shorthand.
  */
  padding-bottom: 0;
  padding: 32px;
}
```

<br>

## Border
