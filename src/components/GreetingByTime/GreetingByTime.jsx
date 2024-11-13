/* eslint-disable react/prop-types */
import s from '../GreetingByTime/GreetingByTime.module.css'

const GreetingByTime = ({timeOfDay}) => {
  return (
    <div className={s.block}>
      <h1>
        {timeOfDay >= 6 && timeOfDay < 12 
        ? 'Доброе утро'
        : timeOfDay >= 12 && timeOfDay < 18 
        ? 'добрый день'
        : timeOfDay >=18 && timeOfDay <= 24 
        ? 'Добрый вечер'
        : 'Доброй ночи'
        }
      </h1>
    </div>
  )
}

export default GreetingByTime