import {  useDispatch } from 'react-redux'
import {  decrement, increment } from './counterSlice'

export default function Body() {
    const dispatch = useDispatch()
    return (
        <div>

             <button
          aria-label="Increment"
          onClick={() => dispatch(increment())}
        >
          Increment
            </button>
              <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
            

        </div>
    )
}