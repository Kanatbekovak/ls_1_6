import './App.css'
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './store/counter-slice.js';
import Header from './components/Header.jsx';
import { TodoList } from './components/ToDoList/TodoList.jsx';
import { useCounterStore } from './zustand/counter-store.js';


function App() {

  // const count = useSelector((state) => state.count.count);
  // const dispatch = useDispatch();
  const {count,increment,decrement} =useCounterStore()
  
  return (
    <div>
      <Header/>
      <h1>Счётчик: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h2>DZ2</h2>
      <TodoList/>
    </div>
  );
}

export default App;