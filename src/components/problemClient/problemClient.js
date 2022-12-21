import PropsTitle from "../propsTitle/propsTitle";
import './problemClient.scss'
const ProblemClient = () => {
  return(
      <div className={'problemClient'}>
          <PropsTitle title={'Основная проблема потребителей'}/>
            <div className={'problemClient-main'}>
                <h3>Защита территории и частных объектов</h3>
                <h3>Отсутствие системы учета и контроля объектов</h3>
                <h3>Человеческий фактор</h3>
            </div>
      </div>
  )
}
export default ProblemClient