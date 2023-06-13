import React from "react";
import './card.css';

export const Card = props => (
    <div className="card-container">
        {/*<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />*/}
        <a target={"_blank"} href={`https://goo.gl/maps/${props.diocese.endpoint}`} className="button">See Direction</a>
        <h2> {props.diocese.name} </h2>
        {/*<p> {props.monster.email} </p>*/}
    </div>
);
