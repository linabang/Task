import './App.css'
import DataLoader from './components/DataLoader/DataLoader';
import GreetingByTime from './components/GreetingByTime/GreetingByTime';
import ProductList from './components/ProductList/ProductList';
import Notification from './components/Notification/Notification';

function App() {

  return (
    <>
    <DataLoader isLoding={false} data={[{name:'Christopher', age:27},{name:'Lina',age:19},{name:'Hannah',age:20} ,{name: 'Lucas', age: '18'}]}/>
    <GreetingByTime timeOfDay={22}/>
    <ProductList products={[
      {name:'apple', price: 50, inStock: false},
      {name:'orange', price: 120, inStock: false},
      {name:'strawberry', price: 230, inStock: true},
      {name:'blueberry', price: 180, inStock: true},
      {name:'pineapple', price: 190, inStock: true},
    ]}/>
    <Notification type={'success'}/>
    <Notification type={'error'}/>
    <Notification type={'warning'}/>
    </>
  )
}

export default App
