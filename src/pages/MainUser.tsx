import React from 'react';
import './Style.css';
import NavigationUser from '../components/NavigationUser';
import MainBox from '../components/MainBox';


const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">PLACEHOLDER</span>      

      <NavigationUser></NavigationUser>
      <MainBox></MainBox>
    </div>


  );
}

export default App;