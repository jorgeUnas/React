import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; 
import Product from './Product';


function App() {
    return (
        <div>
        <Profile />
        <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />
        </div>
    );
}

export default App;

