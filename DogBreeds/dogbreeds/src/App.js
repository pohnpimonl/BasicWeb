import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
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

  const dogElements = dogs.filter((dog)=>{
    return dog.title.includes(searchText)
  }).map((dog, index) => {
    return < DogItem key={index} dog={dog} onDogClick={onDogOpenClick}/>;
  })
  
  let dogPost = null;
  if (!!selectedDog) {
    dogPost = <DogPost dog={selectedDog} onBgClick={onDogCloseClick}/>
  }

  return (
    <div className="App">
      <AppHeader />
      <section className="App-section">
        <div className="App-container">
        <AppSearch value={searchText} onValueChange={setsearchText}/>
      <div className="App-grid">
        {dogElements}
      </div>
        </div>
      </section>
      {dogPost}
    </div>
  );
}

export default App;
