window.addEventListener('load', function () {
    this.document.getElementById("album-view-container").style.opacity = 1;
    console.log("haha222")
})


const queryalbumid = (new URLSearchParams(window.location.search)).get('q');
console.log(queryalbumid);
gathercontent(queryalbumid);



function gathercontent(albumid) {

}

function writecontent(datadict) {
    arturl = `https://coverartarchive.org/release/${datadict.artworkid}`
    d = httpGet(arturl)
    console.log(d.images[0].image)
    document.getElementById("album-view-art").src = d.images[0].image;
    document.getElementById("album-view-art-blur").src = d.images[0].image;
    document.getElementById("album-view-title").innerHTML = datadict.name;
    document.getElementById("album-view-artist").innerHTML = datadict.artist;
    document.getElementById("album-view-features").innerHTML = datadict.features.join(", ");
    var towrite = "";
    for (var a = 0; a < datadict.tracks.length; a++) {
        trackfeaturetext = "";
        if (datadict.tracks[a].features.length != 0) {
            trackfeaturetext = `<span class="track-list-artists">${datadict.tracks[a].features.join(", ")}</span><br>`;
        }
        var trackrow = `<tr>
            <td class="track-list-title-container">
                <span class="track-list-title">${datadict.tracks[a].name}</span>
                <br>
                ${trackfeaturetext}
                <span class="track-list-length">${datadict.tracks[a].length}</span>
            </td>
            <td class="track-list-symbol-container">$</td>
            <td class="track-list-menu-container">#</td>
        </tr>`;
        towrite += trackrow;
    }
    document.getElementById("track-list").innerHTML = towrite;
}


var datatowrite = {
    //665275>In Rainbows>66>d4e08a8b-375d-474d-b960-9aaad7c04d30>6093523,6093526,10913185,6093518,6093522,6093525,10913181,10913186,6093524,6093517,6093519,6093521,10913180,10913183,10913184>1>24080288
    name: "In Rainbows",
    artist: "Radiohead",
    features: [],
    artworkid: "d4e08a8b-375d-474d-b960-9aaad7c04d30",
    tracks: [
        {name: "15 Step",
        features: [],
        length: "3:57",
        hasvideo: 0,
        downloaded: 0},
        {name: "Bodysnatchers",
        features: [],
        length: "4:02",
        hasvideo: 0,
        downloaded: 0}
    ]
}

writecontent(datatowrite)



function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText);
}