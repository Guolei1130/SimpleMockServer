

function getIPAddress(){

	var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    } 
}


var replaceAll = function replaceAll(from,to,str) {
    while (str.indexOf(from) >= 0) {
      str = str.replace(from,to);
    }
    return str;
}

module.exports.ip=getIPAddress();
module.exports.replaceAll=replaceAll;