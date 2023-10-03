import Dropdown from './Dropdown.jsx'
import "./PlayerStatsPage.css"


// Random number stats used for testing
const name = "Raphael"
const games = 150
const names1 = ['1st TD', 'Last TD', '1+ TD', '2+ TD', '3+ TD']
const stats1 = [10, 12, 50, 20, 5]

const names2 = ['F', 'G', 'H', 'I', 'J', 'L']
const stats2 = [1000, 2000, 3000, 4000, 5000, 6000]

const names3 = ['W', 'X', 'Y', 'Z']
const stats3 = [10, 20, 30, 40]


// Main section to display all stats sections
const App = () => {

  return (   
    <div class="mainBody">
      <h1>
        Player: {`${name}`}
      </h1>
      <h2>
        Number of games: {`${games}`}
      </h2>
      
      <section>
        <Dropdown class="Dropdown" title="Touchdowns" stats={stats1} names={names1}/>
        <Dropdown class="Dropdown" title="Section 2" stats={stats2} names={names2}/>
        <Dropdown class="Dropdown" title="Section 3" stats={stats3} names={names3}/>
      </section>
    </div>
  );
};

export default App;
