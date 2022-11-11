import React from 'react'; //импорт библиотеки react, в котром находится препроцессор jsx и другое
import ReactDOM from 'react-dom/client'; //импорт библиотеки dom react, в котором react делает так скажем свое дом дерево
import './index.css'; //импорт стилей
import App from './App'; //импорт app.js
import reportWebVitals from './reportWebVitals'; //Это можно сказать для кроссбраузерности
import { Header } from './App'; // это мы уже экспортировали компонент

//const elem = <h2>Hello world</h2>; //В этом и вся прелесть препроцессора jsx. Мы напрямую смешиваем html с js и все ок
//Но модем сделать это по другому
//const elem2 = React.createElement('h2', {className: 'greetings'}, 'hello world') //первый аргумент тег, второй класс, третий содержимое
//Прикол в том, что второе в итоге и выходит. за нас это компилирует babel

const text = 'hello world'//Чтобы какую-то переменную поместить в верстку, то есть ниже используем фигурные скобки
function calc (a, b){ //В эти фигурные скобки можем вставлять все что угодно. То есть это аналог интерполяции
  return a + b;
}
//Но исключением являются объекты. их мы в верстку не поместим. Если же помещаем массив, то он конкатенируется, то есть склажывается в строку

const elem = ( //Привыкаем, что если тег имеет многострочную структуру, то используем круглые скобки
  <div>
    <h2>Текст: {text}</h2>
    <h3>{calc(2, 2)}</h3>
    <input type='text'/>
    <button>Submit here</button>
  </div>
); //Чтобы быстро писать теги в react лучше скачать emet и настроить его под react
//Также есть еще одноправило, что в таких структурах всегда должке быть хотя бы один элемент родитель, то есть в нашем случае div
//Еще одно правило. Всегда нужно закрывать теги, даже если они самозакрываюшиеся
//Еще одно правило. Когда мы прописываем аттрибуты из реакта, то используем camelCase
//И также когда хотим приписать класс, то используем в аттрибуте className="'some class"

//Как и говорилост раньше. Основная концепция react это разбиение приложения на компоненты
//То есть это могут быть повторяющиеся блоки, там шапка, товары, меню или что угодно
//Отличие от react элементов заключается в том, что элементы единожды созданы и не изменяются


const root = ReactDOM.createRoot(document.getElementById('root')); //Это мы получаем div,в котором и будет наш проект. А также делаем чтобы это стало корнем проекта
root.render( //Этой функцией мы рендерим все в корень. Дальше строгий режим, про который чуть позже
  <App/>,
);

reportWebVitals();