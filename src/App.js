import React from 'react';
import Teams from "./teams.json"
import TeamInfo from "./component/TeamInfo"
import Counter from "./component/Counter"
import 'bootstrap/dist/css/bootstrap.min.css'

 

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      number: 10
    }
  }

    handleMinusClick = () => {
      if(this.state.number>0) {
        this.setState ( {number : this.state.number - 1} )
      }
    }
    handlePlusClick = () => {
        this.setState ( {number : this.state.number + 1} )
  }

  render() {
   const countTeams = Teams.filter((team,index)=>{ return index <= this.state.number});
    return (
      <div className="container-fluid">
        <div className="row">
        <Counter count = {this.state.number} substract = {this.handleMinusClick} 
          increment ={this.handlePlusClick}>
        </Counter>
        </div>
        <div className="row">
          {countTeams.map((team) => <TeamInfo team = {team} />) }
        </div>
      </div>
    )
  }
}

export default App;
