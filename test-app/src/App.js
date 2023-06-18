import './App.css';
//import {Component} from 'react';



const data = [
	{title: 'Smth', price: 20},
	{title: 'In', price: 30},
	{title: 'My ass', price: 40}
]

function WhoAmI(props) {
  data.map(item => {
    return (
      <div>
        <h1>My name is: {item.title}, Surname is: {item.price}</h1>
        <a href={item.link}>That is my profile</a>
      </div>
    )
  })

}

function App() {
  return (
      <div className="App">
          <WhoAmI name='John' surname='Smith' link='facebook.com'/>
          <WhoAmI name='John' surname='Smith' link='facebook.com'/>
          <WhoAmI name='John' surname='Smith' link='facebook.com'/>
      </div>
  )
}


export default App;
