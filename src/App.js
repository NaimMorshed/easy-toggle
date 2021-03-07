import './App.css';
import { useState } from 'react';

function App() {
  const [familiar, setFamiliar] = useState(false);
  const greetings = familiar ? 'Welcome, my friend.' : 'Who the hell are you?';

  return (
    <div className="App">
      <h1>Is Familiar: {familiar.toString()}</h1>
      <button onClick={() => setFamiliar(!familiar)}>Toggle</button>
      <br /> <br/>
      <h2>Greeting</h2>
      <p>{greetings}</p>
      <br/>
      <h2>Food</h2>
      {
        familiar ? <p>I will buy food for you.</p> : <p>Lets eat, his his whose whose?</p>
      }
      <br/>
      <h2>Communication</h2>
      {
        familiar ? <p>Lets join on facebook.</p> : <p>Sorry, I don't add strangers.</p>
      }
    </div>
  );
}

export default App;
