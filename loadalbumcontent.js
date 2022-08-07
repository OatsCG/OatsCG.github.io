const queryalbumid = (new URLSearchParams(window.location.search)).get('q');
console.log(queryalbumid);
writecontent(queryalbumid);


function writecontent(id) {

}

window.addEventListener('load', function () {
    this.document.getElementById("album-view-container").style.opacity = 1;
})