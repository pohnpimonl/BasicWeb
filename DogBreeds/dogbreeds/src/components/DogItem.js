import ('./DogItem.css');

function DogItem(props){
    const { dog, onDogClick } = props;
    return(
        <div className="Dog-item">
            <img src= {dog.thumbnailUrl} onClick={()=>{onDogClick(dog)}} />
            <h4>{dog.title}</h4>
        </div>
    )
}

export default DogItem;