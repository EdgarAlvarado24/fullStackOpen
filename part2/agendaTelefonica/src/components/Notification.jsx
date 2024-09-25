import '../main.css'

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="added_person">
        {message}
      </div>
    )
  }

export default Notification;