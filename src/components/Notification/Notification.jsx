/* eslint-disable react/prop-types */
import s from '../Notification/Notification.css'

const Notification = ({type}) => {
  let style = {};

  if (type === 'success') {
    style = { backgroundColor: 'green', color: 'white', width: '100px'};
  } else if (type === 'error') {
    style = { backgroundColor: 'red', color: 'white', width: '100px'};
  } else if (type === 'warning') {
    style = { backgroundColor: 'orange', color: 'white', width: '100px'};
  }

  return (
    <div className={s.block}>
      <h2 style={style}>
        hello   
      </h2>
    </div>
  )
}

export default Notification