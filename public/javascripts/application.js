function externalLinks() {   
 if (!document.getElementsByTagName) return;   
 var anchors = document.getElementsByTagName("a");   
 for (var i=0; i<anchors.length; i++) {   
   var anchor = anchors[i];   
   if (anchor.getAttribute("href") &&   
       anchor.getAttribute("rel") == "external")   
     anchor.target = "_blank";   
 }   
}   

function logosShuffle() {
  $('#logos div').shuffle();
}

function onApplicationLoad() {
  externalLinks();
  logosShuffle();
}

window.onload = onApplicationLoad;

$(function() {
	$(".tooltip").click(function() { $(this).find(".help").toggle(); });
});