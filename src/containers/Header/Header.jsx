import React from 'react';
import './header.css';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'



const Header = ({setUsersArr, userData}) => {

  const handleSearchName = (value) => {
        const foundUserName = userData.filter(user => user.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        setUsersArr(foundUserName);
      }

  const handleSortAge = (value) => {
    let sortAge = [...userData].sort((a, b) => {
      if (value === 'ascending') {
        return a.age - b.age;
      } else if (value === 'descending') {
        return b.age - a.age;
      }
      return setUsersArr(userData);
    });
    setUsersArr(sortAge);
  }

const clear = (e) => {
    setUsersArr(userData);
    e.target.closest("form").reset()
}

return (
    <header className="container-header">
        <div className="container">
            <form onSubmit={(e) => e.preventDefault()}>
                <Input 
                    type={"search"}
                    name={"search"}
                    placeholder={"Enter name"}
                    handleSearchName={handleSearchName}
                />
                <Select
                  name={"sort"}
                  handleSortAge={handleSortAge}
                />
                
                <Button 
                  clear={clear}
                />
            </form>
        </div>
    </header>
  );
}
export default Header;