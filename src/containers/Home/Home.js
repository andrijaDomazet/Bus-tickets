import React from "react";
import "./Home.scss";
import Search from "../../components/Search/Search";
import WarningCard from "../../components/WarningCard/WarningCard";
import details from "../../stationDetails2";
import travelPackages from "../../travelPackages";
import ArticalCard from "../../components/ArticalCard/ArticalCard";
import Carousel from "../../components/Carousel/Carousel";
import GoogleMap from "../../components/GoogleMap/GoogleMap";

export default function Home() {
  return (
    <div className="home">
      <section className="home__section1">
        <Carousel />
        <div className="home__section1__left">
          <Search classes="searchDiv small" />
        </div>

        <div className="home__section1__right">
          <WarningCard classes="color">
            OBAVEŠTAVAMO VAS DA BEOGRADSKA AUTOBUSKA STANICA DO DALjEG NEĆE
            RADITI ! Svima koji poseduju karte kupljene na BAS-u, biće naknadno
            omogućeno da vrate iste
          </WarningCard>
        </div>
      </section>
      <div className="home__section2">
        <h2>Službe informacija</h2>
        <div>
          {details.map((detail, index) => {
            return <ArticalCard key={index} details={detail} />;
          })}
        </div>
      </div>
      <section className="home__section3">
        <h2>Turistički paketi</h2>
        <div>
          {travelPackages.map((option, index) => {
            return <ArticalCard classes="red" key={index} details={option} />;
          })}
        </div>
      </section>
      <section className="home__section4">
        <GoogleMap />
      </section>
    </div>
  );
}
