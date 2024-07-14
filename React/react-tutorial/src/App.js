import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ShowHide from './components/ShowHide';
import ListOfData from './components/ListOfData';
import Header from './components/Header';
import Country from './components/Country';
import GitHub from './components/GitHub';
import QRCodeGenerator from './components/QRCodeGenerator';
import Home from './EmployeeComponents/Home';
import EmployeeCreate from './EmployeeComponents/EmployeeCreate';
import EmployeeUpdate from './EmployeeComponents/EmployeeUpdate';
import Department from './EmployeeComponents/Department';
import DepartmentCreate from './EmployeeComponents/DepartmentCreate';
import DepartmentUpdate from './EmployeeComponents/DepartmentUpdate';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
      <Route path="/employee-create" element={<EmployeeCreate />} />
      </Routes>
      <Routes>
      <Route path="/employee-update/:id" element={<EmployeeUpdate />} />
      </Routes>
      <Routes>
        <Route path="/department" element={<Department />} />
      </Routes>
      <Routes>
      <Route path="/department-create" element={<DepartmentCreate />} />
      </Routes>
      <Routes>
      <Route path="/department-update/:id" element={<DepartmentUpdate />} />
      </Routes>
      <Routes>
        <Route path='/counter' element={<Counter background="blue" text="white" name="Suraj"></Counter>}></Route>
      </Routes>
      <Routes>
        <Route path='/show-hide' element={<ShowHide background="blue" text="white" name="Suraj"></ShowHide>}></Route>
      </Routes>
      <Routes>
        <Route path='/listofdata' element={<ListOfData></ListOfData>}></Route>
      </Routes>
      <Routes>
        <Route path='/country-guide-app' element={<Country></Country>}></Route>
      </Routes>
      <Routes>
        <Route path='/github' element={<GitHub></GitHub>}></Route>
      </Routes>
      <Routes>
        <Route path='/qrcode' element={<QRCodeGenerator></QRCodeGenerator>}></Route>
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
