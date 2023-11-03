function songs(arr) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

    }

    let songs = [];
    let numberOfSongs = arr.shift();
    let songType = arr.pop();

    for (i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (songType == 'all') {
        songs.forEach((song) => console.log(song.name));
    } else {
        let filtered = songs.filter((song) => song.type == songType);
       // filtered.forEach((song) => console.log(song.name));
       for(let song of filtered){
        console.log(song.name);
       }
    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01', 'favourite'])