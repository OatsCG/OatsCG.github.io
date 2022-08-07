console.log("haha")

function newalbumcategory(title, albumsinfo) {

    var albums = [];
    for (var a = 0; a < albumsinfo.length; a++) {
        //albumsinfo [id, albumname, artistname, albumartlink]
        var albumcontainer = `
        <div class="category-song">
            <img class="category-album-art-blur" src="${albumsinfo[a][3]}">
            <a href="javascript:clickedonalbum(${albumsinfo[a][0]});">
                <img class="category-album-art" src="${albumsinfo[a][3]}">
            </a>
            <span class="category-song-title-text">
                ${albumsinfo[a][1]}
            </span>
            <span class="category-song-artist-text">
                ${albumsinfo[a][2]}
            </span>
            <button class="category-play-button">
                play
            </button>
        </div>`;
        albums.push(albumcontainer);
        
    }
    albums = albums.join("");

    var categorycontainer = `
    <div class="home-category">
        <h2 class="category-title">
            ${title}
        </h2>
        <div class="category-music-list">
            ${albums}
        </div>
        <div class="category-side-graient">
        </div>
    </div>
    <br>`;
    document.getElementById("home-container").innerHTML += categorycontainer;
}

window.addEventListener("animationend", function(){
    //console.log("Page in focus")
})


function clickedonalbum(albumid) {
    //console.log(albumid)
    document.getElementById("home-container").style["animation"] = "none";
    //document.getElementById("home-container").offsetHeight;
    document.getElementById("home-container").style.opacity = "0";
    document.getElementById("home-container").style["animation"] = "example 0.4s";
    setTimeout(function() {
        var win = window.open("album.html?q=" + albumid, "_self");
        setTimeout(function() {
        document.getElementById("home-container").style["animation-name"] = "none";
        document.getElementById("home-container").style.opacity = "1";
        
        }, 10);
    }, 400)
    
}

setInterval(function() {
    history.pushState(null,  document.title, location.href);
}, 50)

newalbumcategory("title title", [
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],

]);
newalbumcategory("title title", [
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],

]);
newalbumcategory("title title", [
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],

]);
newalbumcategory("title title", [
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],

]);
newalbumcategory("title title", [
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],
    [123, "albumtitle", "logic", "https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1557342400705-0MBVEXD53MNZZCPDW68F/SamSpratt_Logic_ConfessionsOfADangerousMind_album_artwork.jpg?format=1500w"],

]);