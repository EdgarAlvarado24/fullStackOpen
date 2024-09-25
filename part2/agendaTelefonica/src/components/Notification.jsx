import '../main.css'

const Notification = ({ message, status}) => {
    if (message === null) {
      return null
    }
    
    if (status == 'add' && status != ''){
        return (
            <div className="added_person">
              {message}
            </div>
          )
    }else{
        return (
            <div className="error">
              {message}
            </div>
          )
    }


  }

export default Notification;