// A new definition to AdRemover.
blockList = ["atflb","btflb","siderail","lotNbButton","lotBeWrapper","p-sharing","class:ad-placement"];
dn = 0; _d = document; confirmedStyle="display:none;opacity:0;width:0px;height:0px;position:absolute;top:-2000px;";
while(dn<blockList.length) {
 if (blockList[dn].search("class:") > -1 ) {
  console.log("Blocking element by "+blockList[dn]+".");
  ele = _d.getElementsByClassName(blockList[dn].replace("class:",""));
  if (ele !== null) {
  ele.innerHTML = "";
  ele.style=confirmedStyle;
  ele.src="chrome://errpage/";}
  else {console.warn("Element ID ["+blockList[dn]+"] not found, ignoring it.")}
 }
 else {
  console.log("Blocking element by id:"+blockList[dn]+".");
  ele = _d.getElementById(blockList[dn]);
  if (ele !== null) {
  ele.innerHTML = "";
  ele.style=confirmedStyle;}
  else {console.warn("Element ID ["+blockList[dn]+"] not found, ignoring it.")}
 }
 dn++;
}

// When script is loaded.
console.warn('Gamepedia AdRemover version DR3 has finished executing.');
