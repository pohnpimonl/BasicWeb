import logo from './logo.svg';
import './App.css';

function App() {
  const textInput = <input type="text" />
  const okButton = (<button>
    OK
  </button>);
  return (
    <div className="App">
        <header className="App-header">
            <img className="App-header-logo" src="/images/01girl-boy.jpg" />
            <h4>บันทึกข้อมูลพนักงาน</h4>
        </header>
        <div className="App-grid">
            <div>
                <p>Test2</p>
                <p>Test2</p>
            </div>
            <div>
                <p>{textInput}</p>
                <p>{textInput}</p>
            </div>
            <div>
                <p>Test2</p>
            </div>
            <div>
                <p>{textInput}</p>
            </div>
        </div>
      <p>
        {okButton}
      </p>
    </div>
  );
}

export default App;
