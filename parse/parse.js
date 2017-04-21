
const fs = require('fs');
const util = require('./util.js');
const constants = require('../util/constants.js');
const common = require('../util/common.js')


const reg = "\[!IMG\]";
const protocolDir = "./protocol/";


function getProtocolFils(){
	return util.list(protocolDir);
}



function replaceIMG(file){
	var replaceTo = constants.obj.HTTP_SUFF + constants.obj.HOST_NAME + constants.obj.PORT_SUFF +"/img/DEMO.jpg";
	var data = fs.readFileSync(file,'utf-8');
	data.replace(reg,replaceTo);

	// console.log(common.replaceAll(reg,replaceTo,data));
	fs.writeFileSync(file+constants.obj.TEMP_SUFF,common.replaceAll(reg,replaceTo,data),'utf-8'|'w+');

}

var getApi = function(){
	var apiPathArray = [];
	var jsonObjectArray = [];
	getProtocolFils().forEach((val,index)=>{
		replaceIMG(protocolDir+val);
		var json = JSON.parse(fs.readFileSync(protocolDir+val + constants.obj.TEMP_SUFF ,'utf-8'));
		for (var i = 0; i < json.api.length; i++) {		
			apiPathArray.push(json.api[i].path);
			jsonObjectArray.push(json.api[i]);
		}
	});
	return [apiPathArray,jsonObjectArray];
}


var getIndexInPathArray = function(array,path){
	for (var i = 0; i < array.length; i++) {
		if (array[i]===path) {
			return i;
		}
	}
	return -1;
}

module.exports.getApi = getApi;

module.exports.getIndexInPathArray=getIndexInPathArray;