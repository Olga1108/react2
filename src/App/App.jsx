import React, {useState} from 'react';
import {userData} from '../data/userData'
import Main from '../containers/Main'
import Header from '../containers/Header'
// import Modal from './components/Modal'
import './App.css';


const App = () => {

  const [usersArr, setUsersArr] = useState([...userData]);


return (
    <div className="wrapper">
      <Header setUsersArr={setUsersArr} userData={userData}/>
      <Main usersArr={usersArr}/>
    </div>
  );
}

export default App;