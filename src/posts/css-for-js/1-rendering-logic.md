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

There are three styles specific to border:

1. `Border-width`
2. `Border-style`
3. `Border-color`

   <br>

These can be combined into the shorthand syntax much like `padding` and `margin`. The only required field is the `border-style`

```css
.box {
  border: 3px solid hotpink;
}
```

If you do not specify a `border` color, it will default to the font `color`.

<br>

**currentColor**: If you want to specify this behavior explicitly, it can be done with the special `currentColor` keyword!

```css
.box {
  color: hotpink;
  border: 1px solid currentColor;
  box-shadow: 2px 2px 2px currentColor;
}
```

### Border-radius

Like `padding`, `border-radius` accepts discrete values for each direction. Unlike `padding`, it's focused on specific _corners_, not specific sides.
<br>
examples:

```css
.even-box {
  border-radius: 25px;
}
.empty-glass {
  border-radius: 10px 10px 40px 40px;
}
.individual-properties {
  border-top-left-radius: 8px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 64px;
}
.circle {
  border-radius: 50%;
}
```

### Border vs Outline

The core difference between `outline` and `border` is that _outline does not affect layout_. Outline is like `box-shadow`; it's a cosmetic effect draped over an element, without nudging it around or changing its size. Outlines appear outside the element.

<br>

Other notes on outline:

- There is no _outline-radius_, Outlines can not be rounded
- Outlines have a special `outline-offset` property. It allow you to add a gap between the element and its outline.
- Never remove the outline if it has not been replaced by an appropriate `:focus` style.

## Margin

_Margin_ increases the space around an element

### Syntax

The syntax for `margin` is very similar to padding. One of the key differences is that `margin` allows **negative** values.

### Negative Margin

A few examples of the strange things negative `margin` does are:

- Pull an element outside its parent
- Pull a sibling closer
- Affect the position of _all siblings_

### Auto Margins

Margins have a trick when using `'auto'` as its value, it can center an element! The `auto`
value seeks to fill the _maximum available space_. The `width` property works the same way.
If `margin-left: auto; margin-right: auto` Then it will center an element horizontally, if its parent has a **fixed** width.

## Flow Layout

Flow layout is the default layout mode. Every HTML element has an intrinsic `display` value of either **inline, block, inline-block**.

<br>

`Inline` elements are meant to highlight a selection of text. examples: `<strong>` `<em>` `<a>`

<br>

Most elements are `block` elements. `<div>` and all its semantic HTML5 alternatives would be examples of block elements.

<br>

`Block` and `inline` do more than just decide direction of elements. There are a set of _rules_ that these display types follow.

### Inline elements

`Inline` elements try to avoid affecting its surroundings. Therefore you will find that many css properties don't work when applied to an `inline` element. examples: `height`, `width`. They are like a polite dinner guest trying to avoid bothering everyone else.

<br>

There are exceptions to this rule. The first is _replaced elements_.
A replaced element is one that embeds a "foreign" object This includes: `<img />` `<video />` `<canvas />`.
<br>

The other exception is the `<button>` tag.

### Inline elements "Magic-space"

Things like images can have a sneaky bit of extra space due to their `inline` heritage. Browsers treat inline elements like they are typography. It makes sense to have some extra height above text so the lines don't feel crammed together. But it can be less than ideal when just adding an image. It can be fixed by setting images to `display: block`

### Inline elements can line-wrap

Inline elements have a pretty big trick up their sleeve: line-wrapping. Unlike block elements, an inline element can produce shapes other than boxes by wrapping lines. Which explains why many css properties don't work on inline elements. What would it even mean to add vertical margin to a wrapped line of text?

### Block elements

When you place a block level element on the page, its content box expands to fill the entire available horizontal space. You can force it to shrink down if you add the special `fit-content` keyword as its width property.

### Inline-block

Inline-block allows you to drop a block element into an inline context. It is an element that _internally_ acts like a block element, but _externally_ acts like an inline element. The parent container will treat it as an inline element, since it's external. but the element itself can be styled like a block.

 <br>

**Inline-block elements DO NOT WRAP**
