import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import DogItem from './components/DogItem';
import DogPost from './components/DogPost';
import dogs from './data/dog';

function App() {
  const [selectedDog, setselectedDog] = useState(null);
  const [searchText, setsearchText] = useState('');

  function onDogOpenClick(theDog){
    setselectedDog(theDog)
  }

  function onDogCloseClick(){
    setselectedDog(null)
  }

  const dogElements = dogs.map((dog, index) => {
    return < DogItem key={index} dog={dog} onDogClick={onDogOpenClick}/>;
  })
  
  let dogPost = null;
  if (!!selectedDog) {
    dogPost = <DogPost dog={selectedDog} onBgClick={onDogCloseClick}/>
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="App-search">
        <input
             className="App-search-input"
             type="text"
             placeholder="Search Dog Breeds"
             value={searchText}
             onChange={(event) => {setsearchText(event.target.value)}}
        />     
      </div>
      <div className="App-grid">
        {dogElements}
      </div>
      {dogPost}
    </div>
  );
}

export default App;
