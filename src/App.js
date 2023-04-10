import './App.css';
import Contacts from './components/Contacts/Contacts';
import {Routes,Route} from "react-router-dom"
import Edit from './components/Edit/Edit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Contacts />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
