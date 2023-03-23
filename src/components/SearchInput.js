import React from 'react'

export default function SearchInput(props) {
  return (
    <div><label>Search : </label>
    <input
      type="input"
      className="searchInput"
      placeholder="search puppy"
      onChange={(e) => {
        props.optimizedFn(e.target.value);
      }}
    /></div>
  )
}
