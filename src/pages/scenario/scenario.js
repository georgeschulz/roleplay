import React from "react";
import './scenario.css'
import PlayerCard from "../../components/playerCard/PlayerCard";
import NewScenarioButton from "../../components/buttons/newScenarioButton";
import { useParams } from 'react-router-dom';
import generateUser from "../../util/generateUser";

function Scenario(props) {
    const { id } = useParams();

    const prospectData = props.profiles[id - 1]

    const practicerData = {
        priorities: [
            {
                id: 1,
                isSelected: false,
                text: 'Work on confidence with the close by having a date ready to go'
            },
            {
                id: 2,
                isSelected: true,
                text: 'Handle price objection by countering with top value point identified during probing'
            },
            {
                id: 3,
                isSelected: false,
                text: 'Collect customer’s email'
            }
        ]
    }

    return (
        <div id="scenario">
            <header>
                <h2><strong>RolePlay</strong>.com</h2>
            </header>
            <div className="container">
                <div className="content-container">
                    <h1>Scenario {id}</h1>
                    <h2>Your first scenario is ready. Click start when you’re ready to go.</h2>
                    <div className="card-group">
                        <PlayerCard
                            type="Prospect"
                            num="1"
                            data={prospectData}
                            size="normal"
                        />
                        <PlayerCard
                            type="Caller"
                            num="2"
                            data={practicerData}
                            size="normal"
                        />
                    </div>
                </div>
            </div>
            <NewScenarioButton />

        </div>
    )
}

export default Scenario;