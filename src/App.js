import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Header from "./components/Header"
import Product from "./components/Product"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element={<><Header/><Product/></>}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
