import React, { Fragment } from "react";
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCart";

const Header = (props) => {
    return (
    <Fragment>
    
    <header className={classes.header} >
       
    <h1> CISCA'S MEALS </h1>
    <HeaderCartButton onClick={props.onShowCart}/>
   
     </header>
    

<div className={classes["main-image"]} >
 <img src={mealsImage} alt=" A table of Nigerian meal" />
 </div >
</Fragment>
    );
};
export default Header; 