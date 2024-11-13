/* eslint-disable react/prop-types */
import s from '../DataLoader/DataLoader.module.css'
import Gif from './gif/Гонящиеся стрелки.gif'

const DataLoader = ({isLoding,data}) => {
  return (
    <div className={s.main__block}>
      {isLoding ? (
        <>
        <h1>Загрузка...</h1>
        <img src={Gif} alt="" />
        </>
      ) : (
        <p>
          {data.map((item, index) => <h2 key={index}>{item.name} {item.age}</h2>)}
        </p>
      )}
    </div>
  )
}

export default DataLoader