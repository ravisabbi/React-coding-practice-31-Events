// Write your code here

import './index.css'

const eventStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const renderingNoView = () => (
    <div className="no-view-container">
      <p className="no-view-description">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderingYetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-description">
        A live performance brings so much to your relationship with dance
        k,rkjbniurhbiknkfbnvufygfbgjvhm
        nzgfyjhrglirgkwnlkj5gbuhjvbkjfbnvlifdbgvuysdgfbvkjrsbdnuygedfbhbusfdjb
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  const renderingRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderingRegistrationClosedView = () => (
    <div className="registration-closed-contained">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="registrations-heading">Registrations Are Closed Now!</h1>
      <p className="registrations-text">
        Stay tuned. We will reopen the Registrations soon!
      </p>
    </div>
  )

  switch (eventStatus) {
    case eventStatusConstants.initial:
      return renderingNoView()
    case eventStatusConstants.yetToRegister:
      return renderingYetToRegisterView()
    case eventStatusConstants.registered:
      return renderingRegisteredView()
    case eventStatusConstants.registrationsClosed:
      return renderingRegistrationClosedView()
    default:
      return <p>Null</p>
  }
}

export default ActiveEventRegistrationDetails
