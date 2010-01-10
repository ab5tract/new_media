// ajax request
var currentType = null;
var currentTool = null;

function reorder() {
	if(currentType != null && currentTool != null) ajaxTagCloud(currentType, currentTool);
}

function ajaxTagCloud(type,tool){
		var el = document.getElementById('tags');
		if(el) el.innerHTML = "<img src='/beta/scripts/ajax-loader.gif' style='margin-top:20px; margin-left:100px'>";
		currentType = type;
		currentTool = tool;
		//var checkbox_value = document.getElementById("sort").value;
		var checkbox_value = 'unordered';
		var len = document.tagcloudform.sort.length;
		for(var i=0; i< len;i++) {
			if(document.tagcloudform.sort[i].checked) var checkbox_value = document.tagcloudform.sort[i].value;
		}
		var el = document.getElementsByName('resultFile');
		if(el.length > 0 && tool == 'google') 
			var resultFile = '../results/google/' + el[0].value + '.txt';
		else if(el.length > 0 && tool == 'blogsearch') 
			var resultFile = '../results/blogsearch/' + el[0].value + '.txt';
		else var resultFile=document.getElementsByName('prevResult')[0].value;
		queryHandler('tags',type,checkbox_value,resultFile);
}




function queryHandler(id,type,ordered,resultfile) {
	var dataSource = 'http://tools.issuecrawler.net/beta/generic/tagCloud.php?type=' + type + '&ordered=' + ordered + '&url=' + resultfile;
   var XMLHttpRequestObject = false;

   if(window.XMLHttpRequest && !(window.ActiveXObject)) {
      XMLHttpRequestObject = new XMLHttpRequest();
      XMLHttpRequestObject.overrideMimeType('text/xml');
   } else if(window.ActiveXObject) {
      XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
   }

   if(XMLHttpRequestObject) {
      XMLHttpRequestObject.open('GET',dataSource,true);
      XMLHttpRequestObject.onreadystatechange = function() {
         if(XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
            parseResult(XMLHttpRequestObject.responseText,id); // gets back json response
         }
      };
      XMLHttpRequestObject.send(null);
   }
}

function parseResult(response,id) {
   var el = document.getElementById(id);
   if(el) {
		if(response.match(/Issue cloud/) && ! response.match(/estimate/)) {
			var el2 = document.getElementById('issuepersite');
			if(el2) el2.checked = 'checked';
		} else if(!response.match(/estimate/)) {
			var el2 = document.getElementById('siteperissue');
			if(el2) el2.checked = 'checked';
		}
		el.innerHTML = response;
	}
}
