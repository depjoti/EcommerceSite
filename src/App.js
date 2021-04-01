
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';
import {Switch,Route} from 'react-router-dom';
import Details from './Components/Details';
import Cart from './Components/Cart';
//import SearchProduct from './Components/SearchProduct';

function App() {
  return (
    <div className="App">
      
      <Route path="/" component={Nav}/>
      {/* <SearchProduct/> */}
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </div>
  );
}

export default App;
