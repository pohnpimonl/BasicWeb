function App() {
  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age :
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Position :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Wage" className="form-label">
              Wage :
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Wage"
            />
          </div>
          <botton className="btn btn-success">Add Employee</botton>
        </form>
      </div>
      <hr/>
      <div className="employee">
        <bunton className="btn btn-primary">Show employee</bunton>
      </div>
    </div>
  );
}

export default App;
