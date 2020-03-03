const fs = require('fs');

console.log('---------------readFile---------------')
fs.readFile('./cars.js', (err, data)=>{
        if(err) {
            console.log(err);
        }else{
            console.log(data.toString());
        }
    });

//readFileSync
console.log('---------------readFileSync---------------')

try{
let data = fs.readFileSync('./cars.js', 'utf8')
    console.log(data);
}catch(err) {
    console.log(err)
}

console.log('---------------readFile with a Promise---------------')

const readFile = (file, type) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, type, (err, data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data) // or data.toString()
            }
        })
    })
}

readFile('./cars.js', 'utf8').then(data => console.log(data)).catch(err => console.log(err));


console.log(`----------------- src files ----------------------------`);

const loadSrc = (url) => {
    if(url.includes('.com')) {
        return url
    }else{
        throw "url does not include .com!";
    }
}
const playingSrc = (url) => {
    return new Promise((resolve, reject)=>{
        let data = loadSrc(url);
        if(data) {
            resolve(data);
        }else{
            reject(data);
        }
    })
}

playingSrc('xxnx.com')
.then(data => console.log(data))
.catch(err =>  console.log(err));


console.log(`----------------- create a server ----------------------------`);

const http = require('http');

http.createServer((req, res) => {
    res.write('hi paul');
    res.end();
}).listen(3000)


console.log(`----------------- create API Endpoint ----------------------------`);
http.createServer((req, res)=> {
    if(req.url === '/api/cars') {
        readFile('./cars.json', 'utf8')
        .then(data => {
            res.write(data);
            res.end();
        })
        .catch(err => {
            res.statusCode = 500;
            res.write(err.message);
            res.end();
        })
    } else if(req.url === '/') {
        res.write('home page');
        res.end();
    }
}).listen(3001)






