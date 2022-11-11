import React from 'react';
import ReactDOM from 'react-dom';
//import MarvelService from './services/MarvelService';
import App from './components/app/App';
import './style/style.scss';

//const marvelService = new MarvelService();

// marvelService.getAllCharacters().then(res => console.log(res));
// marvelService.getCharacter(10155).then(res => console.log(res));
// marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));
//Это мы просто проверяем работает ли api с прописанными функциями

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

