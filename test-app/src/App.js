import './App.css';
import MyButton from './MyButton'
import {Component} from 'react';



class App extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      setCount: 0
    }
  }

  handleClick = () => {
    this.setState(state => ({ 
      count: state.count + 1
    }))
  }

  render() {
    const {count} = this.props
    return (
      <div>
        <h1>Счетчики, изменяющиеся вместе</h1>
        <MyButton count={count} onClick={this.handleClick} />
        <MyButton count={count} onClick={this.handleClick} />
      </div>
    );
  }
}



export default App;
