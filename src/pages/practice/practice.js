import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import './practice.css'
import PlayerCard from "../../components/playerCard/PlayerCard";
import RateButton from "../../components/buttons/rateButton";
import Timer from "../../components/timer/timer";
import extractPriorities from "../../util/extractPriorities";
import thumbsup from '../../assets/thumbsup.png'
import thumbsdown from '../../assets/thumbsdown.svg.png'


function Practice(props) {
    const { addFeedback } = props;

    let stickies = extractPriorities(props.feedback)

    const { id } = useParams();
    const idNum = Number(id)
    const prospectData = props.profiles[id - 1]


    const [currentFeedback, setCurrentFeedback] = useState('')

    function handleInputChange(e) {
        setCurrentFeedback(e.target.value)
    }

    function handleKeyDown(e) {
        if (!currentFeedback) {
            return;
        }
        if (e.key === "Enter") {
            console.log(currentFeedback);
            addFeedback({
                id: Math.random(),
                time: new Date(),
                isPriority: false,
                text: currentFeedback,
                practiceId: id
            })
            document.getElementById('feedbackInput').blur()
            setCurrentFeedback('');

            setTimeout(() => document.getElementById('feedbackInput').focus(), 50);
        }
    }

    function handleSubmit(e) {
        if (!currentFeedback) {
            return;
        }
        addFeedback({
            id: Math.random(),
            time: new Date(),
            isPriority: false,
            text: currentFeedback,
            practiceId: id
        })
        setCurrentFeedback('');
    }

    //show only the feedback generated in this scenario
    const sessionFeedback = props.feedback.filter(item => item.practiceId == id);

    return (
        <div id="practice">
            <header className="app">
                <div className="left">
                    <h2><strong>RolePlay</strong>.com</h2>
                </div>
                <div className="right">
                    <h2><strong>Scenario 1</strong></h2>
                    <h2>Practice Session</h2>
                </div>
            </header>
            <div className="practice-container">
                <div className="sticky-set">
                    {stickies.map((sticky, i) => {
                        return (
                            <div className="sticky" key={i}>
                                <p>{sticky}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="profile-large">
                    <PlayerCard
                        type="Prospect"
                        num="1"
                        data={prospectData}
                        size="large"
                    />
                </div>
                <div className="feedback">
                    <h2>Add feedback on practice</h2>
                    <textarea
                        value={currentFeedback}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        id="feedbackInput"
                    ></textarea>
                    <button className="button-medium-right" onClick={handleSubmit}>Add Feedback</button>
                    <br /><br /><br /><br />
                    <h2>Feedback List</h2>
                    <div id="feedback-list">
                        {sessionFeedback.map(idea => {
                            return (
                                <p key={idea.id}>{`${idea.time.toLocaleTimeString()}: ${idea.text}`}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
            <footer>
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
                <Timer
                    time="14:59"
                />
            </footer>

        </div>
    )
}

export default Practice;