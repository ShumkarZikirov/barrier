import './header-main.scss'
import imgMain from '../../assets/img/main-car-numbers.png'
const HeaderMain = () => {
  return(
      <div className={'headerMain'}>
          <div className={'headerMain-title'}>
                <h2>Smart Barrier</h2>
                <h4>Автоматическая система “Smart Barrier”</h4>
              <p>Система пропуска автомобилей через систему считывание номерных знаков</p>
              <button>Демо видео</button>
          </div>
          <div className={'headerMain-img'}>
              <img src={imgMain} alt="barrier"/>
          </div>
      </div>
  )
}
export default HeaderMain