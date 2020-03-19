import React, { useState, useEffect }  from 'react';
import axios from 'axios'
import SearchAppBar from './layouts/header'
import Main from './layouts/main'

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get('/time').then(response => setCurrentTime(response.data.time))

  // })





  return (
    <div>
      <SearchAppBar/>
      <Main/>
        
    </div>
  );
}

export default App;
