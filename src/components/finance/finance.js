import PropsTitle from "../propsTitle/propsTitle";
import {NumbersArray} from "../../arrays/numbersArray";
import 'bootstrap/dist/css/bootstrap.min.css';
import {finance} from "../../arrays/finance";
import './finance.scss'
const Finance = () => {
  return(
      <div className={'finance'}>
          <PropsTitle title={'Финансы'}/>
          <table data-aos="zoom-out-right" data-aos-duration="1000"  className="table finance-main table-bordered table-dark">
              <tr className={'tableHeader table-bordered table-blue'}>
                  <th>Общие расходы</th>
                  <th>сумма</th>
                  <th>сом</th>
              </tr>
              <tbody  className={'border-1'}>
              {finance.map(elem => {
                  return(
                      <tr className={'tableBody '}>
                          <td>{elem.param}</td>
                          <td style={{whiteSpace:'nowrap'}}>{elem.price}</td>
                            <td>{elem.sum}</td>
                      </tr>
                  )
              })}
              </tbody>
          </table>
      </div>
  )
}
export default Finance