const path = require('node:path')

console.log(path.sep)

const filePath = path.join("/content","/generic","test.txt")
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,"content","generic","test.txt")
console.log(absolute)

