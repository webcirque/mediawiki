// A new definition to AdRemover.
blockList = ["atflb","btflb","siderail","lotNbButton","lotBeWrapper","p-sharing","class:ad-placement","cdm-zone-03","class:ad-main-med-rect-footer"];
function permBlock() {
dn = 0; _d = document; confirmedStyle="display:none;opacity:0;width:0px;height:0px;position:absolute;top:-2000px;";
while(dn<blockList.length) {
 if (blockList[dn].search("class:") > -1 ) {
  if (mw.config._debug==true) {console.log("Blocking element by "+blockList[dn]+".");}
  ele = _d.getElementsByClassName(blockList[dn].replace("class:",""))[0];
  if (ele !== null) {
  ele.innerHTML = "";
  ele.style=confirmedStyle;
  ele.src="chrome://errpage/";}
  else {console.warn("Element ID ["+blockList[dn]+"] not found, ignoring it.")}
 }
 else {
  if (mw.config._debug==true) {console.log("Blocking element by id:"+blockList[dn]+".");}
  ele = _d.getElementById(blockList[dn]);
  if (ele !== null) {
  ele.innerHTML = "";
  ele.style=confirmedStyle;}
  else {console.warn("Element ID ["+blockList[dn]+"] not found, ignoring it.")}
 }
 dn++;
}
}
setInterval("permBlock()",125)

// When script is loaded.
console.warn('Gamepedia AdRemover version DR3 has finished executing.');
