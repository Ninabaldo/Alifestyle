var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}


var list = document.querySelectorAll("div[data-image]");

for (var i = 0; i < list.length; i++) {
    var url = list[i].getAttribute('data-image');
    list[i].style.backgroundImage = "url('" + url + "')";
}