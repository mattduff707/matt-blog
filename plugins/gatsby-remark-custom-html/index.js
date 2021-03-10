const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "heading", node => {
    let { depth } = node

    if (depth === 2) {
      // Grab the innerText of the heading node
      let text = toString(node)
      const html = `
        <h2 class="heading-two">
          ${text}
        </h2>
      `
      node.type = "html"
      node.children = undefined
      node.value = html
    } else if (depth === 3) {
      // Grab the innerText of the heading node
      let text = toString(node)
      const html = `
        <h3 class="heading-three">
          ${text}
        </h3>
      `
      node.type = "html"
      node.children = undefined
      node.value = html
    }
  })
  return markdownAST
}
