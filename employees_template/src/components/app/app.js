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
        {name: 'Nikita', salary: 800, increase: false, rise: true, id: 1}, //id мы прописываем для алгоритма согласования. Что это мать его такое? Это нужно для оптимизации скорости приложения
        {name: 'John', salary: 4500, increase: false, rise: false, id: 2}, //Прикол в том, что если в наш список динамически будут обновляться элементы (а особенно корневые элементы), то react будет все переделывать. Ну это грубо говоря
        {name: 'Valera', salary: 0, increase: false, rise: false, id: 3} //Так вот, id мы прописали (Потом еще в  теге компонента надо аттрибут key прописать), чтобы react меньше переделывал и изменял только нужное
      ], //Итак, тут мы типо создали json файл откуда нам пришли данные
      term: '',
      filter: 'all',
    }
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({data}) => { //Чтобы найти тот или иной элемент объекта - нам нужен его индекс
      //const index = data.findIndex(elem => elem.id === id) //Для этого у нас есть специальный метод findIndex. В аргументе он принимает колбек функцию и если она дает true, то мы получаем значение индекса
      // const before = data.slice(0, index); //Итак, код все верно выдает, только теперь с нуля. Но эт неважно. Как же теперь убрать это элемент? Вообще в логике react если что то появилость, то его трогать не нужно. Но мы можем обойти это и создать копию
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after]

      return {
        // data: newArr
        data: data.filter(item => item.id !== id)
      }
    })
  }
  onToggleIncrease = (id) => {
    // this.setState(({data}) => {
    //   const index = data.findIndex(item => item.id === id);
    //   const old = data[index];
    //   const newItem = {...old, increase: !old.increase};
    //   const newArr = [...data.slice(0, index), newItem, data.slice(index + 1)];
    //   return {
    //     data: newArr
    //   }
    // })
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }))
  }
  onToggleRise = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }
        return item;
      })
    }))
  }
  addItem = (name, salary) => {
    if (name === ''){
      return false;
    }
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }
  onUpdateSearch = (term) => {
    this.setState({term})
  }
  searchEmp = (items, term) => {
    if (items.length === 0) {
      return items;
    }
    const filteredItems = items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
    return filteredItems;
  }
  filterPost = (items, filter) => {
    switch (filter) {
      default:
        return items;
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
    }
  }
  onFilterSelect = (filter) => {
    this.setState({filter});
  }
  render () {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter)
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => {
      return item.increase
    }).length
    return (
      <div className="app">
          <AppInfo
          employees={employees}
          increased={increased} />
  
          <div className="search-panel">
              <SearchPanel
              onUpdateSearch={this.onUpdateSearch}/>
              <AppFilter
              filter={filter}
              onFilterSelect={this.onFilterSelect}/>
          </div>
          
          <EmployeesList data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}/> {/*Здесь нам нужно указать атрибут, что компонент будет ссылаться на это */}
          <EmployeesAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
