import React from 'react'
import './inputBar.scss'

export default function InputBar (props) {
  return (
    <div>
      <form className="formInput" onSubmit={(e) => props.onSubmit(e)}>
        <input placeholder="Write your ingredient here" className="formInput--input-bar" value={props.keyword} type="text" onChange={(e) => props.onChange(e.target.value)}/>
        <button className="formInput--button" type="submit">
          <span className="formInput--button--text">Search</span>
        </button>
      </form>
    </div>
  )
}