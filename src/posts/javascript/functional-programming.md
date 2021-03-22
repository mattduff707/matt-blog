---
date: "02/24/2020"
title: "Functional Programming"
category: "Javascript"
tags: ["Javascript", "React", "Functional"]
description: "Guide to functional Programming"
---

## Purity

In functional programing _purity_ refers to **pure functions**.

<br>

Pure functions are very simple functions. They only operate on their input parameters.

<br>

JS example:

```js
var z = 10
function add(x, y) {
  return x + y
}
```

Notice that `add` does NOT touch the _z_ variable. It doesn't read from _z_ and it does not write to _z_. It only reads _x_ and _y_, its inputs, and returns the result of adding them together.
<br>

That is a pure function. If the `add` function did access _z_, it would no longer be pure.

<br>

---

**consider this "pure" function:**

```js
function justTen() {
  return 10
}
```

If we are only allowing pure functions. And we haven't given **justTen** any inputs, and to be pure it cannot access anything other than its own inputs, then it must only return a constant to remain pure. Since pure functions that take no parameters do no work, they are not very useful. It would be better if **justTen** were defined as a constant `const justTen = 10`

_Most **useful** Pure Functions must take at least one paramter._

<br>

---

**consider this "pure" function:**

```js
function addNoReturn(x, y) {
  var z = x + y
}
```

This function does not return anything. It adds _x_ and _y_ and binds it to a variable _z_ but does not return it.
<br>

It's a pure function because it only deals with its inputs. It does add, but because it has no return, it is useless!
<br>

_All **useful** Pure functions must return something_

<br>

---

Consider the original `add` function:

```js
function add(x, y) {
  return x + y
}
console.log(add(1, 2)) // prints 3
console.log(add(1, 2)) // still prints 3
console.log(add(1, 2)) // WILL ALWAYS print 3
```

Notice that `add(1, 2)` will always return _3_. That is because the function is pure. If the `add` function used an outside value, then you could never predict its behavior.
<br>

_Pure Functions will **always** produce the same output given the same inputs._

---

All of the following functions are **impure**:

```js
writeFile(fileName)
updateDatabaseTable(sqlCmd)
sendAjaxRequest(ajaxRequest)
openSocket(ipAddress)
```

All of these functions have **Side Effects**. When you call them, they change files and database tables, send data to a server or call the OS to get a socket. They do more than just operate on their inputs and return outputs. Therefore, you can **never** predict what these functions will return.
<br>

_Pure Functions have **no** side effects._

---

Because Javascript is an Imperative programming language, side effects are everywhere. Functional programming can not eliminate side effects, it can only confine them.
<br>

**Since programs have to interface with the real world, some parts of every program must be impure. The goal is to minimize the amount of impure code and segregate it from the rest of our program**

## Immutability

Consider this code:

```js
var x = 1
x = x + 1
```

This is an example of mutation. We are taking the _x_ variable and changing its value by incrementing it by _1_. In Functional Programming, this is illegal!
<br>

_There are **no** variables in Functional Programming_
<br>

Stored values are still called variables because of history but they are constants. Once _x_ takes on a value, it's that value for life.

## Recursion

In functional JS there are no loop constructs like **for, while, do, repeat, etc.**
<br>

_Functional Programming uses recursion to do looping_

Consider these two loops:

```js
// simple loop construct
var acc = 0
for (var i = 1; i <= 10; ++i) acc += i
console.log(acc)
// prints 55

// without loop construct or variables (recursion)
function sumRange(start, end, acc) {
  if (start > end) return acc
  return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 0)) // prints 55
```

Here is how that is run:

```
sumRange(1, 10, 0) =      -- sumRange (1 + 1)  10 (0 + 1)
sumRange(2, 10, 1) =      -- sumRange (2 + 1)  10 (1 + 2)
sumRange(3, 10, 3) =      -- sumRange (3 + 1)  10 (3 + 3)
sumRange(4, 10, 6) =      -- sumRange (4 + 1)  10 (6 + 4)
sumRange(5, 10, 10) =     -- sumRange (5 + 1)  10 (10 + 5)
sumRange(6, 10, 15) =     -- sumRange (6 + 1)  10 (15 + 6)
sumRange(7, 10, 21) =     -- sumRange (7 + 1)  10 (21 + 7)
sumRange(8, 10, 28) =     -- sumRange (8 + 1)  10 (28 + 8)
sumRange(9, 10, 36) =     -- sumRange (9 + 1)  10 (36 + 9)
sumRange(10, 10, 45) =    -- sumRange (10 + 1) 10 (45 + 10)
sumRange(11, 10, 55) =    -- 11 > 10 => 55
55
```

One of the most obvious benefits of **immutability** is if you have access to a **value** in your program, you only have read access. That means that no one else can change that value. Including you. So no accidental mutations.
<br>

Also, if your program is **multi-threaded**, then no other thread can pull the rug out from under you. That value is constant and if another thread wants to change it, it'll have to create a new value from the old one.

<br>

## Test

1. **What is immutability in Javascript and name the benefits of immutability in programming**
2. **Write an example function that uses recursion**
3. **Define what makes a _Pure Function_**
