import React from 'react';
import Teams from "./teams.json"
import TeamInfo from "./component/TeamInfo"
import 'bootstrap/dist/css/bootstrap.min.css'
console.log(Teams);

 

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {Teams.map((team) => <TeamInfo team = {team}/>)}
        </div>
      </div>
    )
  }
}

export default App;
