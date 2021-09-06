import './App.css';
import AppHeader from './components/AppHeader';
import DogItem from './components/DogItem';
import DogPost from './components/DogPost';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="App-grid">
        <DogItem />
        <DogItem />
        <DogItem />
        <DogItem />
      </div>
    </div>
  );
}

export default App;
