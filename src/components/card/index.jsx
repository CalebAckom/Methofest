import React from "react";
import './card.css';

export const Card = props => (
    <div className="card-container">
        <a target={"_blank"} href={`https://goo.gl/maps/${props.diocese.endpoint}`} className="button" rel="noreferrer">Map Direction</a><br/>
        <a target={"_blank"} href={`https://res.cloudinary.com/dovaohqno/video/upload/v1690459260/methofest/${props.diocese.video}`} className="button" rel="noreferrer">Video Direction</a>
        <h2> {props.diocese.name} </h2>
    </div>
);
