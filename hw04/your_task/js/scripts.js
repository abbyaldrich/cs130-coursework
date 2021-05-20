const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    url = baseURL + "?type=track&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayTracks(data));
};

const getAlbums = (term) => {
    url = baseURL + "?type=album&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayAlbums(data));
};

const getArtist = (term) => {
    url = baseURL + "?type=artist&q=" + term;
    fetch(url)
        .then(response => response.json())
        .then(data => displayArtist(data[0]));
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};


const displayArtist = (art) => {
    if (art == null) {
        document.querySelector("#artist").innerHTML = "no artist found";
    } else {
        template = `<section class="artist-card" id="${art.id}">
                        <div>
                            <img src="${art.image_url}">
                            <h3>${art.name}</h3>
                            <div class="footer">
                                <a href="${art.spotify_url}" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>`;
    document.querySelector('#artist').innerHTML = template;
    }
};  

const displayTracks = (tr) => {
    document.querySelector('#tracks').innerHTML = ""; 
    if (tr[0] == null){
        document.querySelector("#tracks").innerHTML = "no tracks found";
    } else { 
        const lentracks = tr.length;
        for (var t=0; t < Math.min(5,lentracks); t++){
            template = 
                `<section class="track-item preview" data-preview-track="${tr[t].preview_url}">
                        <img src="${tr[t].album.image_url}">
                        <i class="fas play-track fa-play" aria-hidden="true"></i>
                        <div class="label">
                        <h3>${tr[t].name}</h3>
                        <p>${tr[t].artist.name}</p>
                    </div>
                </section>`;
        document.querySelector('#tracks').innerHTML += template; 
        }
    }
};

const displayAlbums = (alb) => {
    document.querySelector('#albums').innerHTML = "";
    if (alb[0] == null) {
        document.querySelector("#albums").innerHTML = "no albums found";
    } else {
        const lenalbums = alb.length
        for (var t=0; t <= lenalbums; t++){
            template = 
            `<section class="album-card" id="${alb[t].id}">
            <div>
                <img src="${alb[t].image_url}">
                <h3>${alb[t].name}</h3>
             <div class="footer">
                    <a href="${alb[t].spotify_url}" target="_blank">
                    view on spotify
                    </a>
             </div>
            </div>
         </section>`;
        document.querySelector('#albums').innerHTML += template;
        }
    }
};


// const playSong = (ev) => {
//     console.log(ev);
//     constsourceElement = ev.currentTarget; 
//     audioPlayer.setAudioFile(preview_url);
//     audioPlayer.play();
// }

// document.querySelector('.track-item-preview').onclick = playSong; 