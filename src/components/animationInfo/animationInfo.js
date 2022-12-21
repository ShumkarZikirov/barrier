import './animationInfo.scss'
import PropsTitle from "../propsTitle/propsTitle";
import imgBarrier from '../../assets/img/barrier-animation.png'
const AnimationInfo = () => {
  return(
      <div className={'animationInfo'}>
          <PropsTitle title={'Принцип работы программы'}/>
          <div data-aos="zoom-in" data-aos-duration="1500" className={'animationInfo-main'}>
              <div className={'animationInfo-main-img'}>
                  <img src={imgBarrier} alt=""/>
              </div>
              <ul className={'animationInfo-main-left'}>
                  <li>Инфракрасный датчик</li>
                  <li>Обнаружение автомобиля</li>
                  <li>ПО</li>
                  <li>Проверка через базу данных</li>
              </ul>
              <ul className={'animationInfo-main-right'}>
                  <li>Машинное зрение</li>
                  <li>Считывание номерного знака</li>
                  <li>ARDUINO</li>
                  <li>Открытие шлагбаума</li>
              </ul>
          </div>
      </div>
  )
}
export default AnimationInfo