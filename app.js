const fs = require("fs")
const http = require("http")
const path = require("path")
const os = require("os")
const url = require("url")
const crypto = require("crypto")
const sayHello = require("./greetings")
const math = require("./math")
const lodash = require("lodash")

// fs.readFile("./example.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(data)
// })

// const content = 'Hello, NodeJs'

// fs.writeFile("output.txt", content, (err) => {
//     if (err) {
//         console.error(err)
//     }
//     console.log("File written successfully")
// })


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello World")
})


server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/")
})


// const directory = '/user/local'
// const fileName = 'example.txt'

// const fullPath = path.join(directory, fileName)
// console.log(fullPath)

// console.log("platform", os.platform())
// console.log("CPU Architecture", os.arch())
// console.log("Total Memory", os.totalmem())
// console.log("Free Memory", os.freemem())


// const myUrl = new URL("https://example.com:8080/path/name?query=hello#hash")
// console.log("Host",myUrl.host);
// console.log("Path",myUrl.pathname);
// console.log("Search Params",myUrl.searchParams.get("query"));

// const hash = crypto.createHash("sha256")
// hash.update("Hello, NodeJs")
// console.log(hash.digest("hex"))


// const message = sayHello("Developers")
// console.log(message)
// console.log(math.add(5, 3))
// console.log(math.subtract(5, 3))


// const numbers = [1,2,3,4,5]
// const reversed = lodash.reverse(numbers)
// console.log(reversed)


// const readableStream = fs.createReadStream("example.txt", "utf-8")

// readableStream.on("data", (chunk) => {
//     console.log(chunk)
// })

// readableStream.on("end", () => {
//     console.log("finished reading the file")
// })

// readableStream.on("error", (err) => {
//     console.log(err)
// })


// const writableStream = fs.createWriteStream("output2.txt")

// writableStream.write("Hello, ")
// writableStream.write("World!")
// writableStream.end()

// writableStream.on("finish", () => {
//     console.log("Finished writing to the file")
// })

// const readableStream = fs.createReadStream("example.txt")
// const writableStream  = fs.createWriteStream("example-output.txt")

// readableStream.pipe(writableStream)

// writableStream.on("finish", () => {
//     console.log("Finished copied successfully")
// })


// const readline = require('readline')
// const { log } = require("console")

// const readableStream = fs.createReadStream("example.txt")
// const rl = readline.createInterface({
//     input: readableStream,
// })

// rl.on("line", (line) => {
//     console.log("line: ", line)
// })

// rl.on("close", () => {
//     console.log("Finished processing the file")
// })


// fs.mkdir("new-directory", (err)=> {
//     if(err) {
//        return console.error("Error creating directory: ", err)
//     }
//     console.log("Directory created successfully")
// })

// fs.mkdirSync("new-directory2")
// console.log('direcotry created successfully')

// fs.readdir('./', (err, fiels) => {
//     if (err) {
//         return console.error("Error reading directory: ", err)
//     }

//     console.log("Directory content: ", fiels)
// })


// const files = fs.readdirSync('./')
// console.log("Directory content: ", files)

// const dirName = "new-Directory"

// if (fs.existsSync(dirName)) {
//     console.log("directory exists")
// } else {
//     console.log("Directory does not exist")
// }

// fs.rmdir("new-directory2", (err) => {
//     if (err) {
//         return console.error("Error removing directory", err)
//     } else {
//         console.log("directory remove successfully")
//     }
// })

// fs.rm("new-directory2", { recursive: true }, (err) => {
//     if (err) {
//         return console.error("Error removing directory", err)
//     } else {
//         console.log("directory remove successfully")
//     }
// })

// fs.rename("folder1", "folder2", (err)=> {
//     if(err) {
//         return console.error("Error renaming directory", err)
//     }
//     console.log("directory renamed successfully")
// })

// fs.stat('example.txt', (err, stats)=> {
//    if(err){
//     return console.error(err)
//    }
//    console.log("File stats: ", stats);
//    console.log("is directory: ", stats.isDirectory())
// })


// fs.watch("./", (eventType, fileName)=>{
// console.log(`Event: ${eventType}`)
// if(fileName){
//     console.log(`File: ${fileName}`)
// }
// })






