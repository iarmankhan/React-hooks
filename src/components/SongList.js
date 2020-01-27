import React, { useState } from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Almost home', id: 1},
        {title: 'Memory Gospel', id: 2},
        {title: 'This wild darkness', id: 3},
    ]);
    const addSong = () => {
        setSongs([...songs, {title: 'NewSong', key: 4}])
    };
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <button onClick={addSong}>Add Song</button>
        </div>
    );
}
 
export default SongList;