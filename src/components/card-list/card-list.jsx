import React from "react";
import { Card } from "./../card/card";
import './card-list.css';

export const CardList = props => (
    <div className="card-list">
        {
            props.dioceses.map(diocese => (
                <Card key={diocese.id} diocese={diocese} />
            ))
        }
    </div>
);
