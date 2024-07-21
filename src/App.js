import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import BankBalance from './BankBalance';
import Todo from './todos';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <BankBalance></BankBalance>
      <Todo></Todo>
    </div>
  );
}

export default App;
