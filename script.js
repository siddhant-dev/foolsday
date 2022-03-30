var btn = document.getElementById("download");

var device = window.navigator.userAgent;
const regex = /\([A-Za-z]\w+/g;
const found = device.match(regex)[0].substring(1);
document.getElementById("device").innerHTML = found;

btn.addEventListener('click', openFool);

function openFool(e) {
    e.preventDefault();
    window.open("/doctor-strange-2.html", "_blank", "toolbar=yes,resizable=yes,top=500,left=550,width=500,height=500");
    window.open("https://www.instagram.com/isuckatdesign/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=1000,width=400,height=400");
    window.open("https://findsid.dev", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=100,width=400,height=400");
}

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementsByClassName("pranks")[0].style.display = "none";
});