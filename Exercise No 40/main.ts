interface Album {
  artist: string;
  title: string;
  tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
  let album: Album = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

let album1 = makeAlbum("Artist1", "Album Title 1");
let album2 = makeAlbum("Artist2", "Album Title 2", 12);
let album3 = makeAlbum("Artist3", "Album Title 3");

console.log(album1);
console.log(album2);
console.log(album3);
