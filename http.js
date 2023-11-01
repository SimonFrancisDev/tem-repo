const http = require('http');
const server = http.createServer((req, res)=>{
if(req.url === '/') {
    res.end('welcome to our homepage');
}
if(req.url === '/about') {
    res.end('here is our short History')
}
res.end(`
<h1>Oops!</h1>
<p>We cant seem to find the page you are lookuig for</p>
<a href='/'>Back to home</a>
`)
})

server.listen(5000)