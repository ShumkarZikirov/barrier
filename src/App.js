import './App.css';
import React,{useEffect} from "react";
import Header from "./components/header";
import HeaderMain from "./components/header-main";
import AnimationInfo from "./components/animationInfo";
import ProblemClient from "./components/problemClient";
import PriceOffer from "./components/priceOffer";
import Database from "./components/database";
import Comp from "./components/comp";
import Finance from "./components/finance";
import Footer from "./components/footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

    useEffect(() => {
        AOS.init();
        window.scrollTo({ top: 0, left: 0 });
    }, []);


  return (
    <div className="App">
      <div className={'App-block'}>
          <Header/>
          <HeaderMain/>
          <AnimationInfo/>
          <ProblemClient/>
          <PriceOffer/>
          <Database/>
          <Comp/>
          <Finance/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
