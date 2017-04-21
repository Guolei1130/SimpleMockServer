const fs = require('fs');


String.prototype.endWith = function(){
	var d = this.length - ".json".length;
	return (d>=0 && this.lastIndexOf(".json")==d);
}

var protocolFile = [];


var list = function listProtocal(path){
	files = fs.readdirSync(path)
	files.forEach((val,index)=>{
		if (val.endWith()) {
			protocolFile.push(val);
		}
	});
	return protocolFile;
}

module.exports.list = list;