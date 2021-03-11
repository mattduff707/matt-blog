---
date: "03/10/2021 9:43AM"
title: "Array reduce method"
category: "Javascript"
tags: ["Javascript", "Arrays"]
description: "Notes on the array.reduce method"
---

```js
arr.reduce(callback, initialValue)
```

**Key terminology:** `Reducer` and `Accumulator`. The `accumulator` is the value that we end with and the `reducer` is what action (callback) we will perform in order to get to one value. An initial value can be stated as well, if it is omitted then the first value of the array will be used instead and skipped within the reducer function

<br>

_Simple example usage:_

```js
const euros = [29.76, 41.85, 46.5]

const sum = euros.reduce((total, amount) => total + amount)
/*Total is our accumulator. the anonymous function is our reducer callback.
 Amount represents the current value being iterated by the reducer callback*/

console.log(sum) // output: 118.11

const euros = [29.76, 41.85, 46.5]

const sum = euros.reduce((total, amount) => total + amount, 20)
/*In this example I have added an initial value of 20 which will
 be the starting value (initialValue) instead of the first index of the array*/

console.log(sum) // output: 138.11
```

<br>

**Other arguments** the reducer function accepts 4 arguments:

1. `accumulator`
2. `currentValue`
3. `currentIndex`
4. `array`

<br>

_Example using all 4 arguments:_

**Using reduce to find the average of an array of values**

```js
const euros = [29.76, 41.85, 46.5]

const average = euros.reduce((total, amount, index, array) => {
  total += amount
  if (index === array.length - 1) {
    return total / array.length
  } else {
    return total
  }
})

average // 39.37
```

<br>

**reduce is not limited to only returning a single "value". It can also return an `array`.**
to do so, you must set the `initialValue` to an empty `array`. The initialValue will be set to the `accumulator` parameter when the reduction starts (The first `currentValue`).

<br>

_Example where we double the value of each item in an array_

```js
const euros = [29.76, 41.85, 46.5]

const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2)
  return total
}, [])

console.log(doubled) // [59.52, 83.7, 93]
```

### Previous use cases

#### This project!

In this use case we are dynamically generating the category headers for the articles page. Each markdown file in the project has a category stated in it's frontmatter. in my graphql query we fetch each markdown file in the posts folder to make them into nodes I can access (Using markdownRemark and gatsby-source-filesystem). The array of nodes we want to iterate on is found in the `data.allMarkdownRemark.edges`. Refer to snippet for

```js
// hightlight-start
const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            category
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`)

const categoriesArr = data.allMarkdownRemark.edges.reduce((newArr, edge) => {
  const category = edge.node.frontmatter.category //highlight-line
  if (newArr.indexOf(category) === -1) {
    newArr.push(category)
  }
  return newArr
}, [])
```
