---
date: "03/10/2021 9:43AM"
title: "Eloquent JS Chapter 3: Functions"
category: "Javascript"
tags: ["Javascript"]
description: "Recap of fundamental knowledge for CSS"
---

## Defining a function

```js
const square = function (x) {
  return x * x
}

console.log(square(12))
// output: 144
```

Functions have a set of _parameters_ ('x' in the above example. Although it can be any amount of parameters including none).
<br>
They also have a _body_ which contains the statements that are to be executed when the function is called.
<br>
The _return_ keyword specifies the value that the function will provide when called.
<br>

## Bindings and Scopes

Each binding has a scope, which is determined by where it is defined. If a binding is defined outside of any block or function then it is _global_.
Bindings defined within a functions parameters or inside the function can only be referenced by that function or any other block nested within the function

```js
const globalScope = "Hey I am Global"
const testFunc = () => {
  let funcScope = "Hey I am in this functions scope"
  console.log(funcScope, globalScope)
}
testFunc()
// output: 'Hey I am in this functions scope' 'Hey I am Global'

console.log(funcScope)
//output: error funcScope is not defined

console.log(globalScope)
//output: 'Hey I am Global'
```

**Lexical Scoping:** _AKA Nested scoping._ a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

<br>

for example:

```js
const outerFunc = function (x) {
  console.log(x)
  const innerFunc = function (y) {
    console.log(x, y)
    const deepFunc = function (z) {
      console.log(x, y, z)
    }
    deepFunc("Hey I am the deep parameter")
  }
  innerFunc("Hey I am the inner parameter")
}
outerFunc("Hey I am the outer parameter")
/*output:
'Hey I am the outer parameter'

'Hey I am the outer parameter' 'Hey I am the inner parameter'

'Hey I am the outer parameter' 'Hey I am the inner parameter'
 'Hey I am the deep parameter'
 */
```

Each one of the console.log statements shows which parameter can be accessed by that nested function. outerFunc would be unable to grasp the parameters of the innerFunc and the deepFunc. innerFunc could reach the parameters of outerFunc and itself but not deepFunc. and deepFunc has access to them all!
<br>
<br>

## Functions as values

A function value can do all the things that other values can do - you can use it in arbitrary expressions, not just call it. It is possible to store it in a new binding, pass it as an argument to a function and so on.

## Declaration Notation

A function declaration is when the function keyword is used at the start of a statement.

```js
function square(x) {
  return x * x
}
```

Function declarations are not part of the regular top to bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope

## Arrow Functions

Arrow functions are essentially a quicker way to write less verbose functions. They essentially do the same thing as function expressions, but with a few syntactic benefits.
<br>
for example:

```js
const square1 = function (x) {
  return x * x
}
const square2 = x => {
  return x * x
}
const square3 = x => x * x
```

All of these functions do the same thing. arrow functions can omit () from its parameters when there is only one parameter. If the body is a single expression, rather than a block in braces, that expression will be returned automatically from the function. If the arrow function has no parameters at all, you leave a pair of empty parenthesis ().

```js
const arrowFunc = () => console.log("I don't have any parameters")
```
