import React from "react";
import './evaluation.css'
import { Link, useParams } from 'react-router-dom'
import plus from '../../assets/plus.png'
import xSymbol from '../../assets/x.png'
import extractPriorities from "../../util/extractPriorities";

function Evaluation(props) {
    let { id } = useParams();
    let idNum = Number(id);

    const feedback = props.feedback.filter(item => item.practiceId == id && !item.isPriority);
    const priorities = extractPriorities(props.feedback);

    return (
        <div id="evaluation">
            <header className="app">
                <div className="left">
                    <h2><strong>RolePlay</strong>.com</h2>
                </div>
                <div className="right">
                    <h2><strong>Scenario 1</strong></h2>
                    <h2>Evaluation</h2>
                </div>
            </header>
            <div className="evaluation-content-container">
                <div className="evaluation-column">
                    <h2>Feedback List</h2>
                    <br /><br />
                    {feedback.map(item => {
                        return (
                            <div className="feedback-review-element" key={item.id} onClick={() => props.togglePriority(item.id)}>
                                <p>{item.time.toLocaleTimeString()}: {item.text}</p>
                                <img src={plus} className="feedback-review-icon"  />
                            </div>
                        )
                    })}
                </div>
                <div className="evaluation-column">
                    <h2>Improvement Priority List</h2>
                    <br /><br />
                    {priorities.map(priority => {
                        return (
                            <div className="feedback-review-element" key={Math.random()}>
                                <p>{priority}</p>
                                <img src={xSymbol} className="feedback-review-icon" onClick={() => props.togglePriority(priority.id)} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <footer>
                <Link to={`/scenario/${idNum + 1}`} className="button-large">Next</Link>
            </footer>


        </div>
    )
}

export default Evaluation;