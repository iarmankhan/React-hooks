import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([    
        {title: 'Almost home', id: 1},
        {title: 'Memory Gospel', id: 2},
        {title: 'This wild darkness', id: 3},
    ]);
    const addSong = title => {
        setSongs([...songs, {title, key: uuid()}])
    };

    const [age, setAge] = useState(20);
    
    useEffect(() => {
        console.log("UseEffect Hook", songs)
    }, [songs]);

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id}>{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(curAge => curAge + 1)}>Add 1 to age: {age}</button>
        </div> 
    );
}
 
export default SongList;