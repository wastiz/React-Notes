import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import {inc, dec, rnd} from '../../redux/slice'

function Counter () {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.value)

    return (
        <div>
            <p>{counter}</p>
            <button onClick={()=>{dispatch(inc())}}>inc</button>
            <button onClick={()=>{dispatch(dec())}}>dec</button>
            <button onClick={()=>{dispatch(rnd())}}>rnd</button>
        </div>
    )
}

export default Counter;