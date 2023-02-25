import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";

import classes from "../layout/HeaderCartIcon.module.css";
import mysvg from '../../assests/mysvg.svg';


const HeaderCartButton = (props) => {
   const [btnIsHighlighted,  setBtnIsHighlighted] = useState(false);
   const  cartCtx = useContext (CartContext); 
   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
   }, 0);
   const {items} = cartCtx;
   const btnClasses = `${classes.button} ${btnIsHighlighted ?  classes.bump : ''}`;
   useEffect(() => {
    if (items.length === 0) {
    return; 
   }
    setBtnIsHighlighted (true);
  const timer =   setTimeout(()=>  {
setBtnIsHighlighted(false)
    }, 300); 
    return () => {
        
        clearTimeout(timer);
    }; 
}, [items]);

    return   <button className= {btnClasses} onClick={props.onClick}>
 <span className = {classes.icon}>

<img src={mysvg} alt="Cart for the icon" />
     </span>
        <span >
             YOUR CART
             </span>
        <span className={classes.badge}>
             {numberOfCartItems}
             </span>
    </button>
   
};
export default HeaderCartButton;