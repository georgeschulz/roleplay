import React from "react";
import './newScenarioButton.css'
import thumbsup from '../../assets/thumbsup.png'
import thumbsdown from '../../assets/thumbsdown.svg.png'
import { Link, useParams } from "react-router-dom";

function RateButton() {
    let { id } = useParams();
    let idNum = Number(id);
    return (
        <div className="button-group">
            <div className="button" id="button-red">
                <Link to={`/evaluation/${idNum}`}>
                    <img src={thumbsdown} />
                </Link>
            </div>
            <div className="button" id="button-green">
                <Link to={`/evaluation/${idNum}`}>
                    <img src={thumbsup} />
                </Link>
            </div>
        </div>
    )
}

export default RateButton;