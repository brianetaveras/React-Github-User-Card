import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: {}

    }

  }

  componentDidMount(){
    axios.get('https://api.github.com/users/brianetaveras').then(res=>{
      this.setState({
        data: res.data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <UserCard data={this.state.data}/>
      </div>
    )
  }

}

export default App;
