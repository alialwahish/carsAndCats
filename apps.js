var http = require('http');
var fs = require('fs');
var server = http.createServer( function (request, response){
console.log("client url",request.url)


if (request.url === '/'){
    fs.readFile('views/index.html','utf8', function(errors,contents){
        response.writeHead(200,{'Content-type':'text/html'});
        response.write(contents);
        response.end();
  });
}



else if (request.url === '/cars/new'){
    fs.readFile('views/newCar.html','utf8', function(errors,contents){
        response.writeHead(200,{'Content-type':'text/html'});
        response.write(contents);
        response.end();
  });
}



if (request.url === '/cars'){
    fs.readFile('views/cars.html','utf8', function(errors,contents){
        response.writeHead(200,{'Content-type':'text/html'});
        for(var i=1;i<3;i++){
            contents+='<img src="/images/cars/car'+i+'.jpeg" alt="">'
        }
        response.write(contents);
        response.end();
  });
}



else if(request.url ==='/images/cars/car1.jpeg'){
    fs.readFile('./images/cars/car1.jpeg', function(errors,contents){
        response.writeHead(200,{'Content-type':'image/jpeg'});
        response.write(contents);
        response.end();
    });
       
}



else if(request.url ==='/images/cars/car2.jpeg'){
    fs.readFile('./images/cars/car2.jpeg', function(errors,contents){
        response.writeHead(200,{'Content-type':'image/jpeg'});
        response.write(contents);
        response.end();
    });
       
}




else if(request.url ==='/cats'){
    fs.readFile('views/cats.html','utf8', function(errors,contents){
        response.writeHead(200,{'Content-type':'text/html'});
        for(var i=1;i<3;i++){
            contents+='<img src="/images/cats/cat'+i+'.jpeg" alt="">'
        }
        response.write(contents);
        response.end();
  });
       
}


else if(request.url ==='/images/cats/cat1.jpeg'){
    fs.readFile('./images/cats/cat1.jpeg', function(errors,contents){
        response.writeHead(200,{'Content-type':'image/jpeg'});
        response.write(contents);
        response.end();
    });
       
}

else if(request.url ==='/images/cats/cat2.jpeg'){
    fs.readFile('./images/cats/cat2.jpeg', function(errors,contents){
        response.writeHead(200,{'Content-type':'image/jpeg'});
        response.write(contents);
        response.end();
    });
       
}


else{
    response.end("File Not Found")
}



});
server.listen(6789);
console.log("Running server")