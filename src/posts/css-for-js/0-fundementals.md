---
date: "03/10/2021 9:43AM"
title: "Module 0: Fundamentals Recap"
category: "CSS"
tags: ["Css"]
description: "Recap of fundamental knowledge for CSS"
---

## CSS Terminology

**Properties:** Attributes you can specify values for.

```css
p {
  color: red; /* Color would be the **property** */
}
```

<br>

**Selector:** A descriptor that lets you target specific elements on the page.

```css
.apple {
  /* The selector is the class name 'apple'.
   All nodes with the class name apple will be targeted */
  color: red;
}
```

<br>

**Declaration:** A declaration is a combination of a property and a value.

```css
.apple {
  color: red; /*The combination of the property
   'color' and the value 'red' is the **declaration** */
}
```

<br>

**Rule:** AKA a style. A rule is a collection of declarations, targeting one or more selectors. A stylesheet is made up of multiple rules

```css
/*The entire code snippet would be a "Rule" */
.apple {
  color: red;
  font-size: 24px;
}
```

<br>
<br>

## Media Queries

Media queries can be similarly thought of as 'if' statements

```js
if (condition) {
  // do something if condition is true
}
```

```css
@media (condition) {
  /*Some CSS that will run if the condition is met*/
}
```

<br>
<br>

## Selectors

### Pseudo-classes

A pseudo-class is a selector modifier; it will apply its declarations when some sort of condition or state is met
<br>

**Focus:** In HTML there is always an "active element". This is the element that is currently selected. When an interactive
element is clicked or targeted via tab key that element is now focused.

<br>

**Checked:** Applies to checkboxes and radio buttons that are "filled in".

<br>

**Combinators:** Combination of multiple selectors. <br>
**includes:**

- descendant selector (space)
- child selector (>)
- adjacent sibling selector (+)
- general sibling selector (~)
- multiple selector (,)

<br>

**Descendent Selector** (space)

```css
nav a {
  color: red;
  font-weight: bold;
}
/*In this example all 'a' tags who are descendants of the 'nav' tag
 will have these styles applied to them regardless of depth*/
```

<br>

**Child Selector** (>)

```css
nav > a {
  color: red;
  font-weight: bold;
}
/*In this example all 'a' tags who are DIRECT descendants
 of the 'nav' tag will have these styles applied to it*/
```

<br>

**Adjacent sibling selector** (+)

```css
div + p {
  color: red;
  /*Every p that is directly adjacent (following) to a div
   will be styled to be red */
}
```

```html
<p>Not red</p>

<div><p>Not red</p></div>

<p>red!!!</p>

<p>Not red</p>
```

<br>

**General sibling selector** (~)

```css
div ~ p {
  color: red;
}
```

```html
<p>Not red</p>

<div><p>Not red</p></div>

<p>Red!</p>
<p>Red!</p>
<div><p>Not Red</p></div>
<p>Red!</p>
```

<br>

**Multiple Selectors** (,)

```css
input,
textarea {
  border: 4px dotted red;
}
/*using comma separation all "input" and "textarea" tags
 will have these styles applied to them */
/*However, if any of the selectors are invalid the rule wont be applied.
avoid usage with browser unsupported selectors.
*/
```

## Color

<br>

### HSL

```css
.colorful-thing {
  color: hsl(200deg 100% 50% / 0.5);
  /*First arg: Hue. 'red, blue, green, etc'*/
  /*Second arg: saturation. 'how vibrant the color is'*/
  /*Third arg: lightness. 'How dark / light the color is'*/
  /*Fourth Arg: Optional! Opacity*/
}
```

## Units

### Ems

The unit `em` is a _relative_ unit, equal to the font-size of the current element.

<br>

if a heading has a `font-size: 24px` and we give it a `bottom-padding: 2em`, we can expect that the element will have 48px of padding underneath it.

### Rems

The unit `rem` acts much like `em` except that it is always relative to the root element, the `<html>` tag.
This unit is ideal due to its behavior regarding peoples default font size in their browser.
<br>
(_pixels will not change. Therefore rem units are preferable_)

### The bottom line

**What units where?**

- Typography: `rem` due to its increased accessibility
- box model: pixels due to its ease of use
- Width / Height: Depends on the use case. If we want something fixed we would use pixels. If we want something more relative, percentages are ideal.
- Color: HSL!
