
function moveIndicator(id) {
    var position = $(`#${id}`).offset();
    $("#selection-indicator").css("top", `${position.top+5}`);
}

function loadContent() {
    var whereLocation = location.hash + "-button";
    moveIndicator(whereLocation.replace('#', ''));
    var contentDiv = document.getElementById("app");
}

window.addEventListener("hashchange", function() {
    loadContent();
});

loadContent();