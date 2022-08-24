import { Component} from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const{name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        onChange={this.onValueChange}
                        name='name'
                        value={name} //Собственно что щас произошло. У нас идет рендер. все ок. Как мы помним, когда какое-то значение изменятеся, рендер заново запускается
                        className="form-control new-post-label" //B чтобы у нас сохранялось написанное значение, нам нужно прописать value, в котором будет текущее значение. Это кстати называется управлемый компонент. Но есть и неуправлемые компоненты
                        placeholder="Как его зовут?" /> 
                    <input type="number"
                        onChange={this.onValueChange}
                        name='salary'
                        value={salary}
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}



export default EmployeesAddForm;