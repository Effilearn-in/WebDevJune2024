import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ShowHide from './components/ShowHide';

function App() {
  return (
    <div className="App">
     <Counter background="blue" text="white" name="Suraj"></Counter>
     <Counter background="red" text="white"></Counter>
     <Counter background="black" text="white"></Counter>

     <ShowHide background="blue" text="white" name="Suraj"></ShowHide>
     <ShowHide background="red" text="white" name="Suraj"></ShowHide>
     <ShowHide background="black" text="white" name="Suraj"></ShowHide>
    </div>
  );
}

export default App;
