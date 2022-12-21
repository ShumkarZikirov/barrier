import PropsTitle from "../propsTitle/propsTitle";
import {PriceArray} from "../../arrays/priceArray";
import './priceOffer.scss'
const PriceOffer = () => {
  return(
      <div className={'priceOffer'}>
          <PropsTitle title={'Ценное предложение'}/>
          <div  className={'priceOffer-main'}>
                  {
                      PriceArray.map((elem,id) => {
                          return(
                              <div data-aos="fade-right" data-aos-duration="1000"  className={'priceOffer-main-block'}>
                                  <img src={elem.img} alt=""/>
                                  <h4>{elem.title}</h4>
                                  <p>{elem.param}</p>
                              </div>
                          )
                      })
                  }
          </div>
      </div>
  )
}
export default PriceOffer