import PropsTitle from "../propsTitle/propsTitle";
import {NumbersArray} from "../../arrays/numbersArray";
import './database.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
const Database = () => {
  return(
      <div className={'tables'}>
          <PropsTitle title={'Пример базы данных'}/>
                  <table data-aos="zoom-in-right" data-aos-duration="1000"  className="table table-bordered table-dark">
                      <tr className={'tableHeader table-blue'}>
                          <th>ФИО</th>
                          <th>Должность</th>
                          <th>Номерной знак</th>
                          <th>Марка авто</th>
                          <th>Время</th>
                      </tr>
                      <tbody className={'border-1'}>
                      {NumbersArray.map(elem => {
                          return(
                              <tr className={'tableBody '}>
                                  <td>{elem.name}</td>
                                  <td>{elem.position}</td>
                                  <td>{elem.number}</td>
                                  <td>{elem.auto}</td>
                                  <td>{elem.time}</td>
                              </tr>
                          )
                      })}
                      </tbody>
                  </table>
      </div>
  )
}
export default Database