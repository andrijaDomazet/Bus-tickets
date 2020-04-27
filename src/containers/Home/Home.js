import React from "react";
import "./Home.scss";
import Search from "../../components/Search/Search";

export default function Home() {
  return <div className="home">{<Search classes="searchDiv small" />}</div>;
}
