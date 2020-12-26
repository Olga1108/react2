import React from 'react';
import Item from '../Item';
import './main.css';

const Main = ({usersArr}) => {

  return (
      
      <main className="listOfItems">
          {usersArr.map((user) => {
          return <Item {...user} key={user._id}/>
        })

        }
      </main>    
        
        );
  }

  export default Main;