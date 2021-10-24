import "./App.css";
import { useState} from 'react'
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistic from "./components/Statistic/Statistic";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

function App () {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const calcTotalfeedbacks = (good, neutral, bad) => {
    return good + neutral + bad;
  }

  const calcPositivePercentage = (good ) =>  {
    return Math.round(good / calcTotalfeedbacks(good, neutral, bad) * 100);
  }

  const onLeaveFeedback = (label) => {
    switch (label) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      default:
        return;
   }
  }

  
    return (
      <div className='App'>
        <Section text='Please leave your feedback'>
          <FeedbackOptions options={['good','neutral','bad']} onLeavefeedback={onLeaveFeedback} />
        </Section>
       
        <Section text='Statistic'>
          <div>
            {
              good === 0 && neutral === 0 && bad === 0 ?
                <Notification message="No feedback given" /> :
              <Statistic good={good} neutral={neutral} bad={bad}
                  total={calcTotalfeedbacks(good, neutral, bad)} positivePercentage={calcPositivePercentage(good)} />
            }
        </div>
      </Section>
      </div>
    )
  }


export default App;


