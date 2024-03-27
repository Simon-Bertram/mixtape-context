import React, { useContext } from "react"
import { MixtapeContext } from "./MixtapeContext"

export const Controls = () => {
  const { genre, setGenre, sortOrder, setSortOrder } =
    useContext(MixtapeContext)

  return (
    <div className="controls">
      <label htmlFor="genre-select">Genre:</label>
      <select
        id="genre-select"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      >
        <option value="a">all</option>
        <option value="b">rap</option>
        <option value="c">rock</option>
        <option value="d">pop</option>
        <option value="e">hip hop</option>
      </select>
    </div>
  )
}
