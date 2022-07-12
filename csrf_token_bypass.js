var page = 'https://redhatdev.compunnel.com/platform/admin/login?next=%2Fplatform%2Fadmin';
var html = get(page);
document.body.innerHTML = html;
var form = document.forms[0];
var token = form.xsrf.value;
form.xsrf.value = "";

document.body.innerHTML +=
	 '<form id="myform" action="https://redhatdev.compunnel.com/platform/admin/login" method="POST">'
	+'<input type="text" name="login" value="user">'
	+'<input type="password" name="password" value="redhat">'
	+'<input type="hidden" name="next" value="">'
	+'<input type="hidden" name="xsrf" value="' + token + '">'
	+'</form>';

document.forms["myform"].submit();

//alert(form.xsrf.value +" \n "+token);
function get(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
