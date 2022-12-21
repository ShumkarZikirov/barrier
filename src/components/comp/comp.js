import PropsTitle from "../propsTitle/propsTitle";
import imgComp from '../../assets/img/comp.png'
import './comp.scss'
const Comp = () => {
  return(
      <div className={'comp'}>
          <PropsTitle title={'Требуемые средства для работы'}/>
          <div className={'comp-main'}>
              <img src={imgComp} alt=""/>
          </div>
      </div>
  )
}
export default Comp