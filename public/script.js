var btn = document.getElementById("download");

btn.addEventListener('click', openFool);

function openFool(e) {
    e.preventDefault();
    window.open("/doctor-strange-2.html", "_blank", "toolbar=yes,resizable=yes,top=500,left=550,width=500,height=500");
    window.open("https://www.instagram.com/isuckatdesign/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=1000,width=400,height=400");
    window.open("https://findsid.dev", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=100,width=400,height=400");
}