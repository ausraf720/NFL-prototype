import Dropdown from './Dropdown.jsx'
import "./App.css"


// Random number stats used for testing
const name = "Raphael"
const games = 150
const names1 = ['A', 'B', 'C', 'D', 'E']
const stats1 = [100, 200, 300, 400, 500]

const names2 = ['F', 'G', 'H', 'I', 'J', 'L']
const stats2 = [1000, 2000, 3000, 4000, 5000, 6000]

const names3 = ['W', 'X', 'Y', 'Z']
const stats3 = [10, 20, 30, 40]



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
        <Dropdown class="Dropdown" title="Section 1" stats={stats1} names={names1}/>
        <Dropdown class="Dropdown" title="Section 2" stats={stats2} names={names2}/>
        <Dropdown class="Dropdown" title="Section 3" stats={stats3} names={names3}/>
      </section>
    </div>
  );
};

export default App;
