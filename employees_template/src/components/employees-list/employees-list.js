import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise}) => { //Здесь деструктуризацией мы назаначаем свойство, на которое компонент ссылается
    //Но вручную теперь прописывать каждое данное из файла слишком долго, поэтому вспоминаем метод перебора массива map()
    const elements = data.map(item => {
        return (
            <EmployeesListItem key={item.id}
                               name={item.name}
                               salary={item.salary}
                               onToggleIncrease={() => onToggleIncrease(item.id)}
                               onToggleRise={() => onToggleRise(item.id)}
                               onDelete={()=> onDelete(item.id)}/> //Можно еще короче записать spread оператором {...item}
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;