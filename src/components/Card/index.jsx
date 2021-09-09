import React from 'react'
import './card.scss'
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom'

export default function Card (props) {

  const history = useHistory()

  const toDetail = (id) => {
    // history.push(`/detail/1100006`)
    history.push(`/detail/${props.id}/ingredient`)
  }

  return (
    <div onClick={toDetail} className="card mb-3">
      <div className="card--img-container">
        <img src={props.imgSrc} alt={props.title}/>
      </div>
      <div className="card--title-container mt-3">
        <p className="my-2"><small><FontAwesomeIcon icon={faClock} /> {props.time} Minute | {props.people} people</small></p>
        <p className="card--title-container--title">{props.title}</p>
      </div>
    </div>
  )
}

