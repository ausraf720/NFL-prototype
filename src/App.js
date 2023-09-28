import React, { useState } from "react";

const name = "Raphael"
const games = 150
const names1 = ['A', 'B', 'C', 'D', 'E']
const stats1 = [100, 200, 300, 400, 500]

const names2 = ['F', 'G', 'H', 'I', 'J']
const stats2 = [1000, 2000, 3000, 4000, 5000]

function SectionBuilder(stats, names) {


  const listItems = []
  for (let i = 0; i <= 4; i++) {
    listItems.push(<div>{names[i]}: {stats[i]}</div>)
  }

  return (
    <div>
      {listItems}
    </div>
  );
}


const App = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    
    <div>
      <h1>
        Player: {`${name}`}
      </h1>
      <h2>
        Number of games: {`${games}`}
      </h2>
      <div>
        <button type="button" onClick={toggleDropdown}>Dropdown 1</button>
        {isOpen && <div>
          {SectionBuilder(stats1, names1)}
        </div>}
      </div>
      <div>
        <button type="button" onClick={toggleDropdown2}>Dropdown 2</button>
        {isOpen2 && <div>
          {SectionBuilder(stats2, names2)}
        </div>}
      </div>
    </div>
  );
};

export default App;
