// import logo from './logo.svg';
import './App.css';
import Gallary from './Gallery';

function App() {
  return (
    <div className="App">

      <h1>Tho Nguyen</h1>
      <h4>Work Address: 341 Washington St, Brighton, MA 02135</h4>
      <h4>Work Phone: (617) 783-0454</h4>
      <h4>Email: thonguyen737@gmail.com</h4>
      <p>
        Hours: Monday-Friday  9AM-5PM  | Saturaday 9AM-2PM  | Sunday Closed
      </p>

      <div>
        {/* Display Images */}
        <Gallary />
      </div>

      <footer>@Copyright 2021</footer>
    </div>
  );
}

export default App;
