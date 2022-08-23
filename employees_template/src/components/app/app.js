import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Nikita', salary: 800, increase: false, id: 1}, //id мы прописываем для алгоритма согласования. Что это мать его такое? Это нужно для оптимизации скорости приложения
    {name: 'John', salary: 4500, increase: false, id: 2}, //Прикол в том, что если в наш список динамически будут обновляться элементы (а особенно корневые элементы), то react будет все переделывать. Ну это грубо говоря
    {name: 'Valera', salary: 0, increase: false, id: 3} //Так вот, id мы прописали (Потом еще в  теге компонента надо аттрибут key прописать), чтобы react меньше переделывал и изменял только нужное
  ] //Итак, тут мы типо создали json файл откуда нам пришли данные

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/> {/*Здесь нам нужно указать атрибут, что компонент будет ссылаться на это */}
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
