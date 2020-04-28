import React from "react";
import "./Home.scss";
import Search from "../../components/Search/Search";
import WarningCard from "../../components/WarningCard/WarningCard";
import details from "../../stationDetails2";
import ArticalCard from "../../components/ArticalCard/ArticalCard";
export default function Home() {
  return (
    <div className="home">
      <section className="home__section1">
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
        {details.map((detail, index) => {
          return <ArticalCard key={index} details={detail} />;
        })}
      </section>
    </div>
  );
}
