import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Nikita', salary: 800, increase: false, id: 1}, //id мы прописываем для алгоритма согласования. Что это мать его такое? Это нужно для оптимизации скорости приложения
        {name: 'John', salary: 4500, increase: false, id: 2}, //Прикол в том, что если в наш список динамически будут обновляться элементы (а особенно корневые элементы), то react будет все переделывать. Ну это грубо говоря
        {name: 'Valera', salary: 0, increase: false, id: 3} //Так вот, id мы прописали (Потом еще в  теге компонента надо аттрибут key прописать), чтобы react меньше переделывал и изменял только нужное
      ] //Итак, тут мы типо создали json файл откуда нам пришли данные
    }
  }
  deleteItem = (id) => {
    this.setState(({data}) => { //Чтобы найти тот или иной элемен объекта - нам нужен его индекс
      const index = data.findIndex(elem => elem.id === id) //Для этого у нас есть специальный метод findIndex. В аргументе он принимает колбек функцию и если она дает true, то мы получаем значение индекса
      const before = data.slice(0, index); //Итак, код все верно выдает, только теперь с нуля. Но эт неважно. Как же теперь убрать это элемент? Вообще в логике react если что то появилость, то его трогать не нужно. Но мы можем обойти это и создать копию
      const after = data.slice(index + 1);
      const newArr = [...before, ...after]
      return {
        data: newArr
      }
    })
  }
  render () {
    const {data} = this.state
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={data}
          onDelete={this.deleteItem}/> {/*Здесь нам нужно указать атрибут, что компонент будет ссылаться на это */}
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;
