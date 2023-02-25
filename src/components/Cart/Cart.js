import Modal from "../U.I/modal";
import classes from "./Cart.module.css";
import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./checkout";
const Cart = (props) => {
  const [isConfriming, setIsConfirming]= useState(false);
  const [didsubmit, setdidSubmit]= useState(false);
   const cartCtx = useContext(CartContext);
   const totalAmount = `₦${cartCtx.totalAmount.toFixed(2)}`;
   const hasItems  = cartCtx.items.length > 0;
   const [isChecking, setOrderbutton]= useState (false);
   const orderHandler = ()=> {
    setOrderbutton(true);
   }
   const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
   };
   const submitHandler= async (userData)=> {
    setIsConfirming(true);
 const response = await fetch ('https://food-app-89818-default-rtdb.firebaseio.com/meals.json', {
      method : 'POST',
      body:JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    } );
setIsConfirming(false);
setdidSubmit(true);
cartCtx.clearCart()
   };

   const cartItemAddHandler = item  => {
    cartCtx.addItem({...item, amount : 1})
   }; 
    const CartItems = (<ul className={classes['cart-items']}>
      {cartCtx.items.map((item)=> (<CartItem 
      key ={item.id} 
      name={item.name} 
      amount = {item.amount}
       price = {item.price}
        onRemove= {cartItemRemoveHandler.bind(null, item.id)}
        onAdd= {cartItemAddHandler.bind(null, item)}/>))}</ul>);
   const modalActions =     <div className={classes.actions}>

        <button className={classes['button--alt']} onClick={props.onClose}> Close</button>
        
      { hasItems &&  <button className={classes.button} onClick={orderHandler}>Order</button> }

        </div>
        const cartModalContent=  <Fragment>{CartItems}
        
        <div className= {classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
        </div>

        <div>
        {!isChecking && modalActions}

        </div>

       { isChecking && <Checkout onSubmit= {submitHandler} onClose={props.onClose}/>}  </Fragment>
       const isSubmittingContent =<p>Sending order data...</p>;
       const didSubmitModalContent = <Fragment> <p>Successfully sent the order</p>        <button className={classes['button--alt']} onClick={props.onClose}> Close</button>
      
       </Fragment>
    return <Modal onClose={props.onClose}>
     {!isConfriming && !didsubmit  &&  cartModalContent}
     {isConfriming && !didsubmit && isSubmittingContent}
{!isConfriming &&  didsubmit && didSubmitModalContent}

{cartModalContent}
    </Modal>
};
export default Cart;