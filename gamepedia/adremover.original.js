// Yes, this is a advertisement remover.
function permanentBlock() {
 if (document.getElementsByClassName('ad-placement ad-main-med-rect-footer')[0] !== undefined) {
 document.getElementsByClassName('ad-placement ad-main-med-rect-footer')[0].innerHTML="";
 document.getElementsByClassName('ad-placement ad-main-med-rect-footer')[0].style.display="none";}
 if (document.getElementById("atflb") !== null) {
document.getElementById("atflb").style = 'position: absolute; top:-800px; ';}
 if (document.getElementById("btflb") !== null) {
document.getElementById("btflb").style = 'position: absolute; top:-800px; ';}
 if (document.getElementById("siderail") !== null) {
document.getElementById("siderail").style = 'position: absolute; top:-800px; height: 203px; ';
document.getElementById("siderail").innerHTML = '&nbsp#;';}
 if (document.getElementById("lotNbButton") !== null) {
  document.getElementById("lotNbButton").style.display = "none"; }
 if (document.getElementById("lotBeWrapper") !== null) {
  document.getElementById("lotBeWrapper").style.display = "none";
  document.getElementById("lotBeWrapper").innerHTML="";}
 if (document.getElementById("p-sharing") !== null) {
document.getElementById("p-sharing").innerHTML = '<span style="color: #ffffff; font-family: "Verdana"; ">WikiAdBlock</span>';}
document.getElementById("bodyContent").style.width="100%";
 if (document.getElementById("siderail") !== null) {
siderail = document.getElementById("siderail");
document.getElementById("siderail").style = 'position: absolute; top:-2000px; left:-2000px; ';
document.getElementById("siderail").innerHTML = '';}}
 if (clockwork == undefined) {
 var clockwork = setInterval("permanentBlock()",20);}
 
 // Here for twitch remover and video ad remover.


console.warn('Gamepedia AdRemover is initialized.');
