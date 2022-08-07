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


function clickedonalbum(albumid) {
    console.log(albumid)
    window.open("album.html?q=" + albumid, "_self")
}





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