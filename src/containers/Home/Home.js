import React from "react";
import "./Home.scss";
import Search from "../../components/Search/Search";
import WarningCard from "../../components/WarningCard/WarningCard";
import details from "../../stationDetails2";
import travelPackages from "../../travelPackages";
import ArticalCard from "../../components/ArticalCard/ArticalCard";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
export default function Home() {
  return (
    <div className="home">
      <section className="home__section1">
        <Carousel />
        <div className="home__left">
          <Search classes="searchDiv small" />
        </div>

        <div className="home__right">
          <WarningCard>
            ОБАВЕШТАВАМО ВАС ДА БЕОГРАДСКА АУТОБУСКА СТАНИЦА ДО ДАЉЕГ НЕЋЕ
            РАДИТИ ! Свима који поседују карте купљене на БАС-у, биће накнадно
            омогућено да врате исте
          </WarningCard>
        </div>
      </section>
      <section className="home__section2">
        <h2>Службе информација</h2>
        <div>
          {details.map((detail, index) => {
            return <ArticalCard key={index} details={detail} />;
          })}
        </div>
      </section>
      <section className="home__section3">
        <h1>Туристички пакети</h1>
        <div>
          {travelPackages.map((option, index) => {
            return <ArticalCard key={index} details={option} />;
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}
