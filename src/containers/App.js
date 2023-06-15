import { Component } from 'react';
import 'tachyons'
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '..//components/SearchBox'
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
  constructor(){
    super()
    this.state={
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    //   return response.json();
    // })
    // .then(users =>{
    //   this.setState({robots: users})
    // })
    // this.setState({robots: robots})

     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(users =>this.setState({robots: users}))
    
  }

  onSearchChange = (e) =>{
    this.setState({searchField: e.target.value})
  }

  render(){
    const filteredRobot = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    // if componentDidMount is taking time to load
    if (this.state.robots.length === 0){
      return <h1>Robots loading</h1>
    } else{
      return (
        <div className="tc">
          <h1>Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobot} />
            </ErrorBoundry>
          </Scroll>
          
        </div>
      );
    }
  }
 
}

export default App;
