const tracks = [
    {
      "id": "2LqczHHyVkIN9WlaQyFG1R",
      "name": "OK - with Remi Wolf & Solomonophonic",
      "preview_url": "https://p.scdn.co/mp3-preview/9ccebb996884321a0c842affb283d2f400fd0528?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2737980941707cad8fcbc600c2a"
    },
    {
      "id": "49UDOG8DoBajXTJSTqfRMg",
      "name": "Kyoto",
      "preview_url": "https://p.scdn.co/mp3-preview/700c1cf07ee464a5e1a9a328bf040cdd7568cf6f?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2733040ca980277cf1445934add"
    },
    {
      "id": "6GskIhdM6TN6EkPgeSjVfW",
      "name": "Fidelity",
      "preview_url": "https://p.scdn.co/mp3-preview/ded66bd45d7b0faa3e1cdc0665d481a8fe8b0114?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2737fd2d3669c086850c0f766e8"
    },
    {
      "id": "3xKsf9qdS1CyvXSMEid6g8",
      "name": "Pink + White",
      "preview_url": "https://p.scdn.co/mp3-preview/3ebaac6d4686eea331d448a290941364b047b985?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526"
    },
    {
      "id": "1TWNKyNQOBfNUkWWs7FooF",
      "name": "XS",
      "preview_url": "https://p.scdn.co/mp3-preview/9aa3b7ac5b0794413ec0bd1e6e541b31b839879e?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27366a89b08608325d5a34f31d2"
    },
    {
      "id": "47Bg6IrMed1GPbxRgwH2aC",
      "name": "Best Friend",
      "preview_url": "https://p.scdn.co/mp3-preview/c3d4d60709c7441f949a1ff538d1cbbca90934ae?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27333a6b45fa8354efe37633964"
    },
    {
      "id": "7I1kle4TNmkfednJDKo8GR",
      "name": "If You Want To",
      "preview_url": "https://p.scdn.co/mp3-preview/e05af7ac838a7b3140cbf3805180bffb2942728f?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273fe11583497b2a332995b88ed"
    },
    {
      "id": "2FVpOsjT1iquZ3SpCjZ9Ne",
      "name": "Telepathy",
      "preview_url": "https://p.scdn.co/mp3-preview/e057af6f770b0a7a5b50a8152194db8e7b538282?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2733deb4b0115410a85afe31c29"
    },
    {
      "id": "6Qyc6fS4DsZjB2mRW9DsQs",
      "name": "Iris",
      "preview_url": "https://p.scdn.co/mp3-preview/0e87ade9fa869e31b3c32115c2c10ee8fa522c81?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273eda9478c39a21e1cdc6609ca"
    }
];


// Part 1: 
// This code adds a card for the 6th track in the list (above)
// How would you use a loop so that a card is generated for every 
// track in the list?

var i;
for(i=0; i < tracks.length; i++){
  const track = tracks[i];
  const template = `
      <div data-index="${i}" onclick="playSong(event);">
          <img src="${track.image_url}" />
          <h2>${track.name}</h2>
      </div>`;
  document.querySelector('main').innerHTML += template;
};

// Part 2: 
// Using the event object, detect the element that triggered the
// click event (currentTarget) to figure out which song to load 
// into the player next. When you've figured it out, set the 
// #audio-source element's "src" attribute with the correct 
// sound sample and then invoke the audio.load() and audio.play() 
// logic.
const playSong = (ev) => {
    var index = Number(ev.currentTarget.dataset.index);
    document.getElementById("audio-source").src = tracks[index].preview_url;
    const audio = document.querySelector('audio');
    audio.load();
    audio.play();
};
