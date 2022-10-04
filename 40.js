const make_album = (artist, title, tracks) => {
    const album = {
        artist_name: artist,
        album_title: title,
        tracks: tracks || "0"
    }
    console.log("artist: "+ album.artist_name+", Album: "+ album.album_title+ " tracks: "+ tracks);
}

make_album("ys", "tale")
