//注册新变量
var clockwork;
var clockwork2;
//解析当前条目及命名空间
currpath = window.location.href.replace(window.location.href.replace("//","/").split("/")[0] + "//" + window.location.href.replace("//","/").split("/")[1] + "/" , "")
if (currpath.search("index.php?") > -1) {
 currpath = currpath.replace("index.php?","").split("&");
 if (currpath[0].split("=")[0] == "title") {
  currpath = currpath[0].split("=")[1];}}
if (currpath.search(":") > -1){
currnamespace = currpath.split(":")[0];}
else {currnamespace = "default"}
if (currnamespace == "%E5%88%A9%E7%94%A8%E8%80%85") {currnamespace = "User"}
if (currnamespace == "%E5%88%A9%E7%94%A8%E8%80%85%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AF") {currnamespace = "User_talk"}
if (currnamespace == "%E7%89%B9%E5%88%A5") {currnamespace = "Special"}
if (currnamespace == "%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB") {currnamespace = "Module"}
if (currnamespace == "Minecraft_Wiki%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AF") {currnamespace = "Minecraft_Wiki_Talk"}
if (currnamespace == "%E6%A8%A1%E5%9D%97") {currnamespace = "Module"}
if (currnamespace == "%E3%83%BB%E3%83%88%E3%83%BC%E3%82%AF") {currnamespace = "Talk"}
//普通页面
if (currnamespace == "default") {
 if (document.getElementById("atflb") !== null) {
document.getElementById("atflb").style = 'position: absolute; top:-800px; ';
document.getElementById("atflb").innerHTML = '<center style="color: red; font-size: 25px; font-family: "Verdana"; ">Element blocked.</center>';}
 if (document.getElementById("btflb") !== null) {
document.getElementById("btflb").style = 'position: absolute; top:-800px; ';}
 if (document.getElementById("siderail") !== null) {
document.getElementById("siderail").style = 'position: absolute; top:-800px; height: 203px; ';
document.getElementById("siderail").innerHTML = '&nbsp#;';}
 if (document.getElementById("p-sharing") !== null) {
document.getElementById("p-sharing").innerHTML = '<span style="color: #ffffff; font-family: "Verdana"; ">WikiAdBlock</span>';}
document.getElementById("bodyContent").style.width="100%";
 if (clockwork == undefined) {
 var clockwork = setInterval("permanentBlock()",20);}
function permanentBlock() {
 if (document.getElementById("siderail") !== null) {
siderail = document.getElementById("siderail");
document.getElementById("siderail").style = 'position: absolute; top:-2000px; left:-2000px; ';
document.getElementById("siderail").innerHTML = '';}}}
//UserProfile页面
if (currnamespace == "UserProfile") {
 document.getElementById("Recent_Wiki_Activity").innerHTML="最近在Wiki上的活动";
 if(document.getElementsByClassName("linksub")[0]) {document.getElementsByClassName("linksub")[0].innerHTML="编辑个人简介";}
 document.getElementsByClassName("favorite")[0].innerHTML= document.getElementsByClassName("favorite")[0].innerHTML.replace("Favorite Wiki","最喜欢的Wiki");
 document.getElementById("Total_Statistics").innerHTML="总统计";
 document.getElementById("Recent_Comments").innerHTML="最近的评价";
 document.getElementsByClassName("comments section")[0].getElementsByClassName("rightfloat")[0].getElementsByTagName("a")[0].innerHTML = "评论存档";
 document.getElementsByClassName("submit")[0].innerHTML="发布";
 document.getElementById("Friends").innerHTML="好友";
 document.getElementsByClassName("section friends")[0].getElementsByTagName("div")[0].getElementsByTagName("a")[0].innerHTML="管理好友";
 document.getElementById("Achievements").innerHTML="已获得的成就";
 document.getElementsByClassName("section achievements")[0].getElementsByTagName("div")[document.getElementsByClassName("section achievements")[0].getElementsByTagName("div").length - 1].getElementsByTagName("a")[0].innerHTML="查看全部";
 function translateUI() {
 donum = 0;
 actnum = document.getElementsByClassName("activity section")[0].getElementsByTagName("ul")[0].getElementsByTagName("li").length;
 while (donum<actnum) {
 inputc = document.getElementsByClassName("activity section")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[donum].innerHTML;
 outputc = inputc;
 if (outputc.search("Edited ")>-1) {outputc=outputc.replace("Edited ","编辑了")}
 if (outputc.search("Created ")>-1) {outputc=outputc.replace("Created ","创建了")}
 if (outputc.search("about")>-1) {outputc=outputc.replace("about ","于大约")}
 if (outputc.search("an hour ")>-1) {outputc=outputc.replace("an hour ","1个小时")}
 if (outputc.search(" hours ")>-1) {outputc=outputc.replace(" hours ","个小时")}
 if (outputc.search(" minutes ")>-1) {outputc=outputc.replace(" minutes ","分钟")}
 if (outputc.search("days")>-1) {outputc=outputc.replace("days ","日")}
 if (outputc.search("a month")>-1) {outputc=outputc.replace("a month ","1个月")}
 if (outputc.search("months")>-1) {outputc=outputc.replace("months","个月")}
 if (outputc.search("ago</")>-1) {outputc=outputc.replace("ago</","前</")}
 if (outputc.search(">diff<")>-1) {outputc=outputc.replace(">diff<",">差异<")}
 if (outputc.search(">hist<")>-1) {outputc=outputc.replace(">hist<",">历史<")}
 document.getElementsByClassName("activity section")[0].getElementsByTagName("ul")[0].getElementsByTagName("li")[donum].innerHTML = outputc;
 donum++;}
 outputb = document.getElementsByClassName("section stats")[0].innerHTML;
 if (outputb.search("Wikis Edited")>-1) {outputb=outputb.replace("Wikis Edited","编辑过的Wiki量")}
 if (outputb.search("Contributions")>-1) {outputb=outputb.replace("Contributions","贡献量")}
 if (outputb.search("Creations")>-1) {outputb=outputb.replace("Creations","创建页面数")}
 if (outputb.search("Edits")>-1) {outputb=outputb.replace("Edits","编辑数")}
 if (outputb.search("Deletes")>-1) {outputb=outputb.replace("Deletes","删除页面数")}
 if (outputb.search("Patrols")>-1) {outputb=outputb.replace("Patrols","巡查数")}
 if (outputb.search("Wiki Rank")>-1) {outputb=outputb.replace("Wiki Rank","Wiki排名")}
 if (outputb.search("Leaderboard")>-1) {outputb=outputb.replace("Leaderboard","排行榜")}
 if (outputb.search("Gamepedia Rank")>-1) {outputb=outputb.replace("Gamepedia Rank","Gamepedia排名")}
 if (outputb.search("Friends")>-1) {outputb=outputb.replace("Friends","好友数")}
 document.getElementsByClassName("section stats")[0].innerHTML = outputb;}
 if (clockwork2 == undefined) {
 var clockwork2 = setInterval("translateUI()",1000);}
}
//用户页
title = document.getElementById('firstHeading');
if (currnamespace == "User_talk") {title.innerHTML = title.innerHTML.replace("用户讨论","User talk");title.innerHTML = title.innerHTML.replace("利用者・トーク","User talk");}
if (currnamespace == "User") {title.innerHTML = title.innerHTML.replace("用户","User");title.innerHTML = title.innerHTML.replace("利用者","User");}
if (currnamespace == "Talk") {title.innerHTML = title.innerHTML.replace("讨论","Talk");title.innerHTML = title.innerHTML.replace("トーク","Talk");}
if (currnamespace == "Special") {title.innerHTML = title.innerHTML.replace("特別","Special");}
if (currnamespace == "Module") {title.innerHTML = title.innerHTML.replace("模块","Module");title.innerHTML = title.innerHTML.replace("モジュール","Module");}
