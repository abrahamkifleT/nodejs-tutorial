const http = require("http")
const url = require("url")

// Middleware Function for logging requests
function logRequest(req, res, next){
 console.log(`${req.method} request made to ${req.url}`) 
 next()
}

const server = http.createServer((req, res) => {
const {pathname} = url.parse(req.url)

if(pathname.startsWith("/user/")){
    const userId = pathname.split("/")[2]
    res.writeHead(200, {"content-type": "text/plain"})
    res.end(`User ID: ${userId}`)
}else{
    res.writeHead(404, {"content-type": "text/plain"})
    res.end("Route Not found")
}
})

const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})