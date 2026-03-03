import React from 'react'
import { useCounterStore } from '../zustand/counter-store'
// import { useDispatch } from 'react-redux'
// import { increment2 } from '../store/counter-slice';


const Header = () => {
    // const dispatch = useDispatch();
    const {count,increment2} =useCounterStore()
  return (
    <div>Header 
       {count}
        <button onClick={increment2}>++</button>
    </div>
  )
}

export default Header