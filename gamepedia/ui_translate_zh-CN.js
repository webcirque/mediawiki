//MediaWiki Information
function _mw() {
 pageInfo = window.location.search.replace("?","");}
 if (window.location.pathname.search("index.php") > -1) {
 _mw.pagename = _wm.ws("pageInfo").getItem("title");
 _mw.namespace = _wm.ws("pageInfo").getItem("title").split(":")[0];}
else {
 _mw.namespace = window.location.pathname.replace("/","").split(":")[0];
 _mw.pagename = window.location.pathname.replace("/","");}

function _uitranslation() {
 if (_mw.namespace = "UserProfile") {
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
    output = output.replace(" a day","一天");
    output = output.replace(" ago","前");
    output = output.replace(" hours","个小时");
    output = output.replace(" an hour","1个小时");
    output = output.replace("about","大约");
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

_uitranslation();

_uitranslation.loaded = true;
