import './App.css'
import DataLoader from './components/DataLoader/DataLoader';
import GreetingByTime from './components/GreetingByTime/GreetingByTime';
import ProductList from './components/ProductList/ProductList';
import Notification from './components/Notification/Notification';

function App() {

  return (
    <>
    <DataLoader isLoding={false} data={[{name:'Vlad', age:33},{name:'Ivan',age:45},{name:'Arbol',age:18} ]}/>
    <GreetingByTime timeOfDay={22}/>
    <ProductList products={[
      {name:'Milk', price: 70, inStock: false},
      {name:'Butter', price: 34, inStock: false},
      {name:'tea', price: 2, inStock: true},
      {name:'coffee', price: 5, inStock: true},
      {name:'Bread', price: 10, inStock: true},
    ]}/>
    <Notification type={'success'}/>
    <Notification type={'error'}/>
    <Notification type={'warning'}/>
    </>
  )
}

export default App
