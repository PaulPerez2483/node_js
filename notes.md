## node environment

node -v : to know if u have node install
-- there is no document object model in the node environment

## node setTimeout and setInterval

setInterval(()=> {console.log('hi')}, 2000) : The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

    ex: code 
    let interval = setInterval(()=> console.log('hi'),2000); // renders hi every 2 seconds
    setTimeout(()=> clearInterval(interval), 5000); // stops interval after 5 seconds.

## node and nodemon

install nodemon - npm i nodemon -g  


## node processes 

activity monitor > search for node  // to kill the process
has two processors :
the nodemon app and the file nodemon is running

## fs.readFile
--Asynchronous use with mz/fs : https://www.npmjs.com/package/mz

const fs = require('fs'); // a library that gets install  when node is install

## readFile
read file in asynchronously (non-blocking)
the normal way in node.js to read a file asynchronously - tells node to read in the file and then to get a callback when file-reading has been finished.

readFile takes 3 parameters (name of file, encoding of the file, callback function);

const fs = require('fs');

fs.readFile('/.users.json', 'utf8',  (err, data)=> {
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
});

## readFileSync

const fs = require('fs');

try {
    let data = fs.readFileSync('file.js', 'utf8');
    console.log(data)
}catch(err){
    console.error(err)
}

## readFile with a promise
Promisification :  is a long word for a simple transformation. It’s the conversion of a function that accepts a callback into a function that returns a promise.

const UrlData = (url) => {
    return new Promise((resolve, reject)=>{
        let data = url.includes('.com);
        if(data) {
            resolve(data)
        }else{
            reject(data)
        }
    })
}

urlData('cnn.com').then(data => console.log(data)).catch(err => console.log(err));

## create a server 
const http = require('http');
http.createServer((req, res)=>{
    res.write('hello world');
    res.end()
}).listen(3000)


## create API endpoints 
 console.log(req.url) // return the url every time the page renders 
 const http = require('http);
 http.createServer((req, res)=>{
     if(req.url === '/api/cars'){  // or // .index.html
         readFile('./cars.json', 'utf8')
         .then(data => {
             res.write(data);
             res.end()
         })
         .catch(err => {
             res.statusCode = 500;
             res.write(err.message);
             res.end()
         })
     }else{
         res.write('home');
         res.end()
     }
 }).listen(3000);


## writing back to a file 
    fs.writeFile() : takes 3 parameter (file, content, callback function)

## nodemon infinite loop    
    nodemon index.js --ignore users.json

