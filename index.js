const http = require('http');
const fs = require('fs');
const constants = require('./util/constants.js');
const parseJsonFS = require('./parse/parse.js');

const hostname = constants.obj.HOST_NAME;
const port = constants.obj.PORT_I;

const api = parseJsonFS.getApi();

if (api.length != 2) {
	console.log("parse error");
}
var pathArray = api[0];
var jsonObjectArray = api[1];

var html = "";

for (var i = 0; i < jsonObjectArray.length; i++) {
	html += "<a href=\""+ jsonObjectArray[i].path +"\">" + jsonObjectArray[i].desc+"</a><br>"
}


const server = http.createServer((req,res) => {
		var url_info = require('url').parse(req.url, true);
		var index = parseJsonFS.getIndexInPathArray(pathArray,url_info.pathname);

		if (index==-1) {
			if (url_info.pathname.indexOf(constants.obj.IMAGE_NAME) != -1) {
				var content = fs.readFileSync("./img/"+constants.obj.IMAGE_NAME,constants.obj.BINARY);
				res.statusCode = 200;
				res.write(content,constants.obj.BINARY);
				res.end();
			}else{
				res.statusCode = 200;
				res.setHeader('Content-Type','text/html');
				res.write('<head><meta charset="utf-8"/></head>');
				res.end(html);
			}
		} else {
			res.statusCode = 200;
			res.setHeader('Content-Type','text/html');
			res.write('<head><meta charset="utf-8"/></head>');
			console.log(JSON.stringify(jsonObjectArray[index].return));
			res.end(JSON.stringify(jsonObjectArray[index].return),'utf8');	
		}	
});

server.listen(port, hostname, () => {
		console.log(`Server running at http://${hostname}:${port}/`);
});
