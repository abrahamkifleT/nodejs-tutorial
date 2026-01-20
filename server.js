const http = require("http")
const url = require("url")

// Route handler

const routes =  {
    "/": (req, res) => {
      res.writeHead(200, {"content-type": "text/plain"})
      res.end("Welcome to HomePage")
    },
     "/about": (req, res) => {
      res.writeHead(200, {"content-type": "text/plain"})
      res.end("This is AboutPage")
    },
     "/notfound": (req, res) => {
      res.writeHead(404, {"content-type": "text/plain"})
      res.end("Page Not Found")
    },
}

const server = http.createServer((req, res) => {
    console.log(req.url)
   const {pathname} = url.parse(req.url)
   if(routes[pathname]){
    routes[pathname](req, res)
   }else {
    routes["/notfound"](req, res)
   }

})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})