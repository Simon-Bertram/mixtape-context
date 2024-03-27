import React, { useContext } from "react"
import { MixtapeContext } from "./MixtapeContext"
import { Song } from "./Song"

export const SongList = () => {
  const { songs, genre, sortOrder } = useContext(MixtapeContext)

  return (
    <>
      <h2>My Music</h2>
      <ul>
        {songs.map((song, index) => (
          <Song
            key={index}
            artist={song.artist}
            genre={song.genre}
            name={song.name}
            year={song.year}
          />
        ))}
      </ul>
    </>
  )
}
