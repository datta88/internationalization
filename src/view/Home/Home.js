import React, { useState } from "react";
import './Home.css';
import I18n from './../../utils/i18n'

function Home(){
   const usersCount = 105;
    return(
        <>
        <div className="ietin-container">
        <h1>{I18n('welcomeMessage')}</h1>
        <p>{I18n('normalMessage')} </p>
        <h3>{I18n('greetingMessage')}</h3>
        <h5>{I18n('endMessage')}</h5>
        <select className="ietin-select"
        defaultValue={localStorage.getItem("lang")}
         onChange={(e)=>{
            localStorage.setItem("lang",e.target.value)
            window.location.reload();
            }} >

            <option value="mr">Marathi</option>
            <option value="hi">Hindi</option>
            <option value="en">English</option>
        </select>
        <p>{I18n("userStatMessage" , "<studentCount>",usersCount)}</p>
        </div>
        </>
    )
}
export default Home