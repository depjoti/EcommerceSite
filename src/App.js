
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';
import {Switch,Route} from 'react-router-dom';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Categories from './Components/Categories';
//import SearchProduct from './Components/SearchProduct';

function App(props) {
  return (
    <div className="App">
      {/* <SearchProduct productSearchHandler={props.productSearchHandler()}/> */}
      <Route path="/" component={Nav}/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/category" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
