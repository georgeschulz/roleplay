import React from 'react';
import './PlayerCard.css'

function PlayerCard(props) {

    const { 
        person,
        phone,
        address,
        card,
        scenario,
        objections,
        priorities
     } = props.data;

    if (props.type === 'Prospect') {
        return (
            <div className={props.size === 'large' ? "card card-large" : "card"}>
            <div className="card-header-group">
                <h3>Player {props.num}</h3>
                <h3 className='player-type-header' style={{'color': '#CA3C3C'}}>{props.type}</h3>
            </div>
            <div className='card-body-main'>
                <div className='card-body-subgroup'>
                    <p><strong>Name: </strong> {person.name}</p>
                    <p><strong>Email: </strong> {person.email}</p>
                    <p><strong>Phone: </strong> {phone.number} ({phone.type})</p>
                    <p><strong>Address: </strong> {address}</p>
                </div>
                <div className='card-body-subgroup'>
                    <p><strong>{card.number}</strong></p>
                    <p><strong>Secuirity:</strong> {card.security} </p>
                    <p><strong>Exp: </strong> {card.exp} </p>
                </div>
                <div className='card-body-subgroup'>
                    <p><strong>Sentiment: </strong> {scenario.sentiment}</p>
                    <p><strong>Profile: </strong> {scenario.profile}</p>
                    <p><strong>Problem: </strong> {scenario.problem}</p>
                </div>
                <div className="card-body-subgroup">
                    <p><strong>Objections</strong></p>
                    <ul>
                        {objections.map((objection, index) => {
                            return (
                                <li key={index}>{objection}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="card">
            <div className="card-header-group">
                <h3>Player {props.num}</h3>
                <h3 className='player-type-header' style={{'color': '#3CCA9F'}}>{props.type}</h3>
                
            </div>
            <br /> <br />
            <div className='card-body-main'>
                <form>
                    {priorities.map(prioritiy => {
                        return (
                            <div className="priority-checkbox-group" key={prioritiy.id}>
                                <input selected={prioritiy.isSelected} type="checkbox" name={prioritiy.id} className="priority-checkbox"></input>
                                <label htmlFor={prioritiy.id}>{prioritiy.text}</label>
                            </div>
                            
                        )
                    })}
                </form>
                
            </div>
        </div>
        )
    }
}

export default PlayerCard;