import React from "react";
import style from "./Relogio.module.scss";
export default function Relogio() {
    return(
        // Uso essa tag do React, pois estva dando erro por conta da ausencia de uma tag pai.
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </React.Fragment>
    )
}