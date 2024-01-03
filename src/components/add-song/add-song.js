import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");

  const addSong = () => {
    if (newSong.trim() !== "") {
      setSongs([...songs, newSong]);
      setNewSong("");
    }
  };

  const removeSong = (index) => {
    const updatedSongs = [...songs];
    updatedSongs.splice(index, 1);
    setSongs(updatedSongs);
  };

  const updateSong = (index, updatedSong) => {
    const updatedSongs = [...songs];
    updatedSongs[index] = updatedSong;
    setSongs(updatedSongs);
  };

  return (
    <div>
      <h2>Songs to Learn</h2>
      <input
        type="text"
        value={newSong}
        onChange={(e) => setNewSong(e.target.value)}
        placeholder="Add a new song"
      />
      <button onClick={addSong}>Add Song</button>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <input
              type="text"
              value={song}
              onChange={(e) => updateSong(index, e.target.value)}
            />
            <button onClick={() => removeSong(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
