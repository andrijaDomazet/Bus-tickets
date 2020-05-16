import React from "react";
import "./AboutUs.scss";
import details from "../../stationDetails.js";
import ArticalCard from "../../components/ArticalCard/ArticalCard.js";

export default function AboutUs() {
  // console.log(details);

  return (
    <div className="aboutUs">
      <img src="./img/carousel/background2.jpg" alt="cover" />
      <p>
        Пријем и отпрема путника и аутобуса представља основну делатност
        Београдске аутобуске станице. Поред свих већих места у Србији, мрежом
        аутобуских линија, БАС покрива све републике бивше Југославије и редовно
        одржава аутобуску везу са 17 држава Европе.
        <br /> Брза и савремена услуга почива на најновијој технологији
        компјутерске продаје превозних исправа. Процес рада у БАС-у се одвија од
        0 до 24 часа, 365 дана у години. Београдска аутобуска станица је
        формирана 3.марта 1966. године и припада групи великих предузећа, са
        статусом Акционарског друштва.
      </p>
      <div className="aboutUS__details">
        {details.map((detail, index) => {
          return <ArticalCard key={index} details={detail} />;
        })}
      </div>
    </div>
  );
}
