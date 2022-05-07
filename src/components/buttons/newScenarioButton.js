import React from "react";
import './newScenarioButton.css'
import playImg from '../../assets/play.png'
import shuffleImg from '../../assets/shuffle.png'
import { Link, useParams } from "react-router-dom";

function NewScenarioButton() {
    let { id } = useParams();
    let idNum = Number(id);
    return (
        <div className="button-group">
            <div className="button" id="button-red">
                <Link to={`/scenario/${idNum + 1}`}>
                    <img src={shuffleImg} />
                </Link>
            </div>
            <div className="button" id="button-green">
                <Link to={`/practice/${idNum}`}>
                    <img src={playImg} />
                </Link>
            </div>
        </div>
    )
}

export default NewScenarioButton;