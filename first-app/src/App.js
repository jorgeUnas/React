import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; 
import Product from './Product';
import List from './List';


function App() {
    return (
        <div>
            <Profile />
            <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />
            <Product name="Iphone" price = {1234} rating = "4.8/5.0" /> 
            
            <List type='Living Musician'>
                <li>Sachiko M</li>
                <li>Harvey Sid Fisher</li>
            </List>
                <List type='Living Cat Musician'>
            <li>Nora the Piano Cat</li>
             </List>
        </div>
    );
}

export default App;

