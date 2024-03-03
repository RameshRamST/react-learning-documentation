import { useSelector, } from 'react-redux'

export default function Header() {
     const count = useSelector((state) => state.counter.value)
    return (<div>
        <h3>HEADER</h3>
        CART COUNT <span>{count}</span>
    </div>)
  

}