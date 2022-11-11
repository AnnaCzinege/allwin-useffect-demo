import { Suspense, useEffect, useState } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';

import { useFetch } from "./useFetch";

const BadStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   setInterval(() => {
    console.log("Bad");
    setCount(c => c + 1)
   }, 500)
  }, [])

  return (
    <p>Bad stopwatch: {count}</p>
  )
}

const GoodStopwatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   const id = setInterval(() => {
    console.log("Good");
    setCount(c => c + 1);
   }, 500);
   return () => clearInterval(id);
  }, [])

  return (
    <p>Good stopwatch: {count}</p>
  )
}

function App() {
  const [url, setUrl] = useState(null);
  const [count, setCount] = useState(0);

  const { data } = useFetch({
    url,
    number: 10,
  })

  // useEffect(() => {
  //   console.log("useEffect runs")
  //   const id = setInterval(() => {
  //     console.log('start interval ', id)
  //     setCount(count + 1);
  //   }, 1000);
   
  //   return () => clearInterval(id);
  // }, [count]);

 
  console.log("App rendering")
  return (
    <div className="App">
     
      {/* <div>{`Hello ${data?.animal}`}</div> */}

      {/* <div>{count}</div> */}

      {/* <div>
        <button onClick={() => setUrl('/dog.json')}>Get Dog</button>
        <button onClick={() => setUrl('/cat.json')}>Get Cat</button>
      </div> */}

      {/* <div style={{display: "grid", gridTemplateColumns: '1fr 1fr'}}>
        <BadStopwatch />
        <GoodStopwatch />
      </div> */}

      {/* <div>{`${data?.fact}`}</div> */}

      {/* <ProfilePage userId={2} /> */}
    </div>
  );
}

export default App;
