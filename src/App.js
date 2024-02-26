import Entry from './components/Entry';
import ToDO from './components/ToDo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <h1 className='title'>My Todos</h1>
      <Entry/>
      <ToDO name="Finish ToDO" description="Complete to do list application"/>
    </div>
  );
}

export default App;
