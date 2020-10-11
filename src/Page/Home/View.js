
import React from "react";
import "./index.scss";

import logo from '../../logo.svg';


export default function View(props) {
  const {intl, lang} = props
  const {onClickLang} = props
  return <div className="Home">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
       Joyce And Dan
    </p>
    <p>
       Success for achieving Time Freedom
    </p>
    <div
      className="App-link"
    >
      {intl.formatMessage({ id: "ID_TITLE" })}
    </div>
    <div className="Home_Langs">
      <div className={`Home_Ls_btn ${lang === "ko" && "Home_Ls_btn-active"}`} onClick={() => {
        onClickLang("ko")
      }}>ko</div>
      <div className={`Home_Ls_btn ${lang === "en" && "Home_Ls_btn-active"}`} onClick={() => {
        onClickLang("en")
      }}>en</div>
    </div>
  </header>
  
  </div>
}

      