import './App.css'

const Hello = () => {
    return <h2>Hello World</h2>
}

const Btn = () => {
    let signed = false;
    let text = ''
    if (signed === false) {
        text = 'log in'
    } else {
        text = 'logged in'
    }
    return <button>{text}</button>
}
function Apps() {
    return (
        <div className="App">
            <Hello/>
            <Btn/>
        </div>
    )
}

export default Apps