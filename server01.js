const http = require('http');
const fs = require('fs').promises;

const host1 = http.createServer(async (req, res)=>{
    try{
        //if(req.method === 'GET'){
        //    else if(req.method === 'POST')
        //    else if(req.method === 'PUT')
        //    else if(req.method === 'DELETE')
        //}
    const data = await fs.readFile('./server2.html');
    res.writeHead(200, {'content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Create server for ME</h1>')
    res.write('<a href=http://www.google.com/>Google</a>')
    res.write('<p>Hello guys!!</p>');
    res.end(data);
    }catch (error){
        console.error(error)
        res.writeHead(500, {'content-Type':'text/html; charset=utf-8'})
        res.end(error.messege);
    }
})
const host2 = http.createServer((req, res)=>{
    res.writeHead(200, {'content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Create server for ME</h1>')
    res.write('<a href=http://www.google.com/>Google</a>')
    res.end('<p>Hello guys!!</p>')
})


host1.listen(8080);

host1.on('listening', ()=> {
    console.log('8080번 포트에서 서버 대기 중 입니다.');
});

host1.on('error',(error)=>{
    console.error(error);
});

host2.listen(8081);

host2.on('listening', ()=> {
    console.log('8081번 포트에서 서버 대기 중 입니다.');
});

host2.on('error',(error)=>{
    console.error(error)
});;

