import styled from 'styled-components';
import React, {StrictMode} from 'react'; //Также синтаксисом деструктуризацией мы вытаскиваем строгий режим, который является аналагом 'use strict'
import { Component } from 'react';
import './App.css';

//Итак, созданный автоматически app.js и я вляется как раз компонентом
//Как мы видим это просто функция, которая экпортируется и импортируется в главный файл
//Одно из правил компонентов в том, что они пищутся с большой буквы и react будет воспринимать эти функции за компоненты только в этом случае

const Header = function() {
  return <h3>This is a header</h3>
}

function Login () {
  let access = true;
  return (
    <section>
      <input type="text" placeholder='type password'/>
       <button>{access ? 'logged' : 'log in'}</button> {/*В такой интерполяции можно использовать только простые операторы, которые работают в одной строке */}
    </section>
  )
}

const Section = ()=>{
  const submit = 'submit'
  return(
    <section>
      <input placeholder='How would you rate my app?' type='text'/>
      <button type='submit'>{submit}</button>
    </section>
  )
}
class Field extends Component { //Вспоминаем урок с наследованием. Здесь тоже самое, только мы наследуем не от дом дерева, а от react DOM Component
  render() { //Один из главных методов, который мы унаследовали
    const holder = 'Enter here';
    const styleField = {
      width: '300px',
      color: 'red'
    };
    return <input
           placeholder={holder}
           type="text"
           style={styleField}/> //Можно писать такими переносами, если строка выходит большая
  }
} //Это просто другой синтаксис написания компонентов. Разница в том, что значение возвращаются по разному. В классе же делается это через render()

function Footer () {
  return (
    <footer>
      <h4>That is the end</h4>
      <a href="">Link to home</a>
    </footer>
  )
}

let user = {
  name: 'alex',
  surname: 'shepard',
  link: 'facebook.com'
}

function WhoAmI () { //Мы можем брать и передавать значения из объекта, который например находится в датабазе
  return (
    <div>
      <h1>My name is: {user.name}, Surname is: {user.surname}</h1>
      <a href={user.link}>My profile</a>
    </div>
  )
}
class WhoAmI2 extends Component{ //аргумент этой функции является свойство компонента. Обычно это объект и его называют props. если мы его не происываем, то все равно он автоматически создаться 
  constructor (props) { //Так прописываются свойства классового компонента
    super(props);
    this.state = { //Это как раз идет состояние компонента, то есть то, что будет изсменяться
      years: 27,
    }
  }

  nextYear = () => {
    console.log('+');
    this.setState({
      years: this.state.years + 1 
    })
  }
  commitInputChanges = (e, color) => {
    console.log(color)
    this.setState({ //Кстати, когда мы запускаем setState, то функция render запускается заново и чтобы быстрее render отрабатывал нужно прописывать key
      position: e.target.value //Но react просто сохраняет старое значение и сравнивает его с новым и изменяет только нужное
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>click to next year</button>
        <h1>My name is: {name}, Surname is: {surname}, age is: {years}, Position is: {position}</h1>
        <a href={link}>My profile</a>
        <span>
          <p>Введите должность</p>
          <input type="text" onChange={(e) => this.commitInputChanges(e , 'somecolor')}/> {/*Также если нужно передать какие-то аргументы, то оборачиваем в стрелочную функцию и указываем их в функции*/}
      </span>
      </div>
    )
  }
}

class Calculator extends React.Component { //Практика со state
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
  }
  
  next = () => {
    this.setState({
      number: this.state.number + 1
    })
  }
  prev = () => {
    this.setState({
      number: this.state.number - 1
    })
  }
  reset = () => {
    this.setState({
      number: this.state.number = 0
    })
  }
  random = () => {
    this.setState({
      number: this.state.number = Math.floor(Math.random() * (50 - -50 + 1)) + -50
    })
  }
  
  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.number}</div>
        <div className="controls">
          <button onClick={this.next}>INC</button>
          <button onClick={this.prev}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}
const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto
`
function App() {
  return (
    <StrictMode> {/*Можно сказать что это jshint*/}
    <Wrapper>
       <Header /> {/* Как и всегда помним, что нужно закрывать теги, но еслинадо еще что-то вложить, то закрываем как другие теги */}
       <Login/>
       <Section></Section>
       <WhoAmI/>
       <WhoAmI2 name='Valera' surname="Smith" link="instagram.com"/> {/*Мы можем передать данные свойства props через html атрибуты. Но прикол такой записи в том, что ее очень сложно динамически изменять
       Поэтому берем за правило. В props же мы можем передавать все что угодно, даже те самые объекты, которые на страницу не модем вставить*/}
       <Calculator/>
       <Footer></Footer>
    </Wrapper>
    </StrictMode>
  );
}

export {Header}; //можно экспортировать деструктуризацией
export default App;
