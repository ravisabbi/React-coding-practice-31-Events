// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const clickEvent = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="event-item">
      <button type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-img"
          onClick={clickEvent}
        />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
