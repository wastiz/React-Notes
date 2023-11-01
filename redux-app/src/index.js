import React from 'react';
import ReactDOM from 'react-dom/client';
import {} from 'redux';

const initialState = 0;

const reducer = (state = 0, action) => {
	switch (action.type) {
		case "INC":
			return state + 1
		default:
			return state
	}
}

store = createStore(reducer)

console.log(store); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
