import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { fetchItem } from './store/cartSlice';

function App() {
const dispatch=useDispatch()
const { cartIsVisible } = useSelector(state => state.ui)

useEffect(()=>{
  dispatch(fetchItem())
},[])

  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
