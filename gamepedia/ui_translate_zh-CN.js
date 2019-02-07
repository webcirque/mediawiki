//MediaWiki Information
function _mw() {
 pageInfo = window.location.search.replace("?","");
 if (window.location.pathname.search("index.php") > -1) {
 _mw.pagename = _wsgetItem(pageInfo,"title","&","=");
 _mw.namespace = _mw.pagename.split(":")[0];}
else {
 _mw.namespace = window.location.pathname.replace("/","").split(":")[0];
 _mw.pagename = window.location.pathname.replace("/","");}
 if (_mw.namespace == _mw.pagename){
  _mw.namespace = "(default)";
 }
}
_mw();
console.warn("MediaWiki Information Module initialized.");

function _uitranslation() {
 document.getElementById("Friends").innerHTML = "好友";
 document.getElementById("Achievements").onnerHTML = "成就";
 if (_mw.namespace == "UserProfile") {
  actvs = document.getElementsByClassName("activity section")[0];
  if (actvs) {
   donum = 0;
   actnum = actvs.getElementsByTagName("li").length;
   while (donum <actnum) {
    output = actvs.getElementsByTagName("li")[donum].innerHTML;
    output = output.replace(">diff<",">差异<");
    output = output.replace(">hist<",">历史<");
    output = output.replace(')">',')">于');
    output = output.replace(" days","天");
    output = output.replace("a day","1天");
    output = output.replace(" ago","前");
    output = output.replace(" hours","个小时");
    output = output.replace("an hour","1个小时");
    output = output.replace("about ","大约");
    output = output.replace(" months","个月");
    output = output.replace("a month","1个月");
    output = output.replace(" years","年");
    output = output.replace("a year","1年");
    output = output.replace(" minutes","分钟");
    output = output.replace("a minute","1分钟");
    output = output.replace("less than ","不到");
    output = output.replace("Created","创建了");
    output = output.replace("Edited","编辑了");
    output = output.replace('</a> (<a','</a> （<a');
    output = output.replace('</a>) <time','</a>） <time');
    output = output.replace("于于","于");
    actvs.getElementsByTagName("li")[donum].innerHTML = output;
    donum ++;
   }
   donum = undefined;
   actnum = undefined;
   output = undefined;
  }
 }
}
console.warn("UI translation initialized.");

function _uitranslation_stop() {
 clearInterval(_uitranslation.loopId);
 console.warn("UI translation stopped.");}
function _uitranslation_run() {
 _uitranslation.loopId = setInterval("_uitranslation();",100);
console.warn("UI translation is running...");}
_uitranslation_run();
console.warn("UI translation is fully initialized.");

_uitranslation.loaded = true;
