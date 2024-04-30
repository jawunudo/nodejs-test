const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage")
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page")
  }
  res.end(`
  <h1>Oops!</h1>
  <p>This page does not exist</p>
  <a href="/">go back home</a>
  `)
})

server.listen(5000, () => {
  console.log("Listening on port 5000")
})
