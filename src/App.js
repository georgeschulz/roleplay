import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/home';
import Login from './pages/login/login';
import Scenario from './pages/scenario/scenario';
import Practice from './pages/practice/practice';
import Evaluation from './pages/evaluation/evaluation';
import generateUser from './util/generateUser';

let hardCodedFeedback = [
  {
    id: 1,
    time: new Date(),
    isPriority: true,
    text:  "Work on confidence with the close by having a date ready to go",
    practiceId: 1
  },
  {
    id: 2,
    time: new Date(),
    isPriority: true,
    text:  "Handle price objection by countering with top value point identified during probing",
    practiceId: 1
  },
  {
    id: 3,
    time: new Date(),
    isPriority: true,
    text:  "Collect customer’s email",
    practiceId: 1
  }
]

function App() {
  const [profiles, setProfiles] = useState([generateUser('Inbound Google Call')]);
  
  //feedback to be an object with properties: isPriority, time, text
  
  const [feedback, setFeedback] = useState(hardCodedFeedback);

  useEffect(() => {
    for(let i=0; i < 100; i++) {
      setProfiles(current => [...current, generateUser('Inbound Google Call')])
    }
  }, []);

  function addFeedback(newFeedback) {
    setFeedback(current => [...current, newFeedback])
  }

  function togglePriority(id) {
    console.log("Toggle Priority runs with id: " + id)
    console.log(feedback)
    //find the index of the element with the correct id
    for(let i = 0; i < feedback.length; i++) {
      if(feedback[i]["id"] === id) {
        
        const valCopy = {...feedback};
        console.log(valCopy)
        valCopy[i]['isPriority'] = true;
        setFeedback(valCopy)
        console.log(feedback)
      }
    }
  }

  return (
      <Switch>
        <Route exact path="/login" component={Login}>
          <Login></Login>
        </Route>
        <Route path="/scenario/:id">
          <Scenario
            profiles={profiles}
          />
        </Route>
        <Route path="/practice/:id">
          <Practice 
            profiles={profiles}
            addFeedback={addFeedback}
            feedback={feedback}
          />
        </Route>
        <Route path="/evaluation/:id">
          <Evaluation 
            feedback={feedback}
            togglePriority={togglePriority}
          />
        </Route>
        <Route exact path="/" component={Home}>
        </Route>
      </Switch>
  );
}

export default App;
