import React from "react";
import data from "./data.json";
import "./reset.css";
import './App.css';

interface ISummaryProps {
  icon: string;
  category: string;
  score: number;
  color: { textColor: string };  // Color object with textColor property
  key?: string;
}

function App() {
  const newData: ISummaryProps[] = data.map(item => {
    let color;

    switch (item.category) {
      case 'Reaction':
        color = {textColor: 'var(--light-red)'};
        break;
      case 'Memory':
        color = {textColor: 'var(--orangey-yellow)'};
        break;
      case 'Verbal':
        color = {textColor: 'var(--green-teal)'};
        break;

      default:
        color = { textColor: 'var(--cobalt-blue)'};
    }

    return {
      ...item,
      color
    };
  });
  const Result: React.FC = () => {
    return (
      <div className='result'>
        <h1 className='result-title'>Your Result</h1>
        <div className="result-circle">
          <span className='large-number'>76</span>
          <span>of 100</span>
        </div>
        <h2 className='subtitle'>Great</h2>
        <p className='body-text'> You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    );
  }

  const SummaryItem: React.FC<ISummaryProps> = ({icon, category, score, key, color}) => {
    const { textColor } = color;

    return (
      <div className='summary-item' key={key}
           style={{ '--text-color': textColor } as React.CSSProperties}>
        <div className="icon-wrapper">
          <img src={icon} alt="icon path"/>
        </div>
        <span className='category'>{category}</span>
        <span className='score'><span className='score-value'>{score}</span> / 100</span>
      </div>
    )
  }

  const Summary: React.FC = () => {
    return (
      <div className='summaries'>
        <h2 className='title'>Summary</h2>
        {newData.map(({score, category, icon, color}, index) => (
          <SummaryItem icon={icon} category={category} score={score} key={category + index} color={color}/>
        ))}
        <button className='summary-button'><span>Continue</span></button>
      </div>
    )
  }

  return (
    <div className='app'>
      <header className="app-header">
        {/* If there's a header content, put it here */}
      </header>
      <main className="app-wrapper">
        <Result/>
        <Summary/>
      </main>
      <footer className="app-footer">
        {/* If there's footer content, put it here */}
      </footer>
    </div>
  );
}

export default App;
