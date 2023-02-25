import React, {  useState } from "react";
import Header from './components/layout/Header';
import Meals from "../src/components/meal/meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProviderContent";
function App() {
  const [cartIsShown, setCartisShown] = useState(false);
  const showCartHandler= () => {
    setCartisShown(true);
  };
const hideCartHandler =() => {
  setCartisShown(false);
};
 
  return (
  
 <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler} />}
     <Header onShowCart = {showCartHandler}/>
  <main>
        <Meals/>
        </main> 
    </CartProvider>
    
  );
};

export default App;
